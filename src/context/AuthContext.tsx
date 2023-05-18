import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  signOut,
} from 'firebase/auth'

import Loader from '@/components/loader'
import { Userr } from "@/interfaces/views"
import { auth } from '@/lib/firebase/firebase'

interface AuthContextInterface {
  currentUser: Userr | null
  token?: string
  isAuthenticated: boolean
  signUpUser: (email: string, password: string) => any
  loginUser: (email: string, password: string) => any
  signInGoogle: () => any
  logoutUser: () => void
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<Userr | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user?.uid,
          email: user?.email!,
          name: user?.displayName!,
          avatar: user?.photoURL!,
        })
        setLoading(false)
        let authToken = sessionStorage.getItem('AuthToken')
        if (!authToken) {
          sessionStorage.setItem('AuthToken', user.refreshToken)
        }
      } else {
        setCurrentUser(null)
        setIsAuthenticated(false)
      }
      setLoading(false)
    })
  }, [])

  const signUpUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider()
    return await signInWithPopup(auth, provider)
  }

  const logoutUser = async () => {
    setCurrentUser(null)
    await signOut(auth)
    sessionStorage.removeItem('AuthToken')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        signUpUser,
        loginUser,
        logoutUser,
        signInGoogle,
      }}
    >
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  )
}
