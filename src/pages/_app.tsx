import { useEffect } from "react";
import { useRouter } from "next/router"
import { Provider } from "react-redux"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"

import "antd/dist/reset.css";
import "@/styles/globals.css";
import { store } from "@/store/store"
import { Modal } from "@/utils/modal_utils";
import { AuthProvider } from "@/context/AuthContext"
import { ThemeProvider } from "@/context/ThemeContext"
import ProtectedRoute from "@/components/protected_route"
import { ModalWrapper } from "@/components/modals/modal_wrapper";

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
              <>
                <Component {...pageProps} />
                <ModalWrapper ref={(ref) => (globalModalRef = ref)} />
              </>
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
