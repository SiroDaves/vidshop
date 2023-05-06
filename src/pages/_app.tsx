import "../styles/globals.css"
import { useEffect } from "react";
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../store/store"
import { AuthProvider } from "../context/AuthContext"
import { ThemeProvider } from "../context/ThemeContext"
import { SessionProvider } from "next-auth/react"
import { useRouter } from "next/router"
import ProtectedRoute from "../components/protected_route"
import { Modal } from "../utils/model_utils";
import { ModalWrapper } from "../components/modals/modal_wrapper";

const noAuthRequired = ["/", "/login", "/signup"]

let globalModalRef: any;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    Modal.registerModal(globalModalRef);
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <SessionProvider session={pageProps.session}>
          <Provider store={store}>
            {noAuthRequired.includes(router.pathname) && (
              <Component {...pageProps} />
            )}
            {!noAuthRequired.includes(router.pathname) && (
              <ProtectedRoute>
                <Component {...pageProps} />
                <ModalWrapper ref={(ref) => (globalModalRef = ref)} />
              </ProtectedRoute>
            )}
          </Provider>
        </SessionProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
