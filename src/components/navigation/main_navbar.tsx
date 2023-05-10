import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Button, Modal as AntModal } from "antd";

import { getFirebaseUser } from "../../slices/authSlice";
import { useAuth } from "../../context/AuthContext";
import { useWindowDimensions } from "../../hooks/useWindowsDimensions";
import { Modal } from "../../utils/model_utils";

interface NavBarProps {
  user: any
}
export default function NavBar({ }) {

  const [navbar, setNavbar] = useState(false)
  const user = useSelector(getFirebaseUser)
  const { logoutUser } = useAuth()
  const router = useRouter()
  const { currentUser } = useAuth()

  const dimensions = useWindowDimensions();

  function upload() {
    router.push('/upload')
  }

  function login() {
    router.push('/login')
  }

  function logout() {
    logoutUser()
    router.push('/')
  }

  const HelloWorld = ({
    callback,
    data,
    update,
    enableBottomSheet = false,
  }: any) => {
    return (
      <div
        style={{
          position: "relative",
        }}
      >
        <div className="content">
          <div>Updated props is {data || "Null"}</div>
          <div>Hello world</div>
          <div>Hello world</div>
        </div>
        <div
          className="modal__bottom"
          style={{
            position: enableBottomSheet ? "fixed" : "absolute",
          }}
        >
          <Button type="primary" style={{ marginRight: "10px" }} onClick={update}>
            update props
          </Button>
          <Button type="primary" danger onClick={callback}>
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  const openModalAndBottomSheet = () => {
    Modal.open({
      title: "Modal Title",
      enableBottomSheet: dimensions.width < 640,
      component: HelloWorld,
      fullScreen: true,
      props: {
        callback: () => {
          //closes the modal
          Modal.close();
        },
        enableBottomSheet: dimensions.width < 640,
        update: () => {
          //update the current modal props any where from the application using
          //this methods
          Modal.updateProps(
            {
              data: "hello",
            },
            0
          );
        },
      },
    });
  };

  return (
    <nav className="fixed top-0 z-10 w-full px-2 py-1 shadow bg-white bgNav bg-white/10 bg-gradient-to-r md:px-5">
      <div className="justify-between px-4 mx-auto md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-2 md:py-2">
            <Link href="/">
              <Image src="/vidshop.png" className="cursor-pointer" height="50" width="50" alt="logo" />
            </Link>

            <div className="md:hidden">
              <button
                className="p-3 rounded-md outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${navbar ? "block bg-white" : "hidden"
              }`}
          >
            {/*<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black hover:text-indigo-200">
                <a href="javascript:void(0)">Home</a>
              </li>

              <li className="w-full py-2 pl-1 text-black hover:text-indigo-200">
                <Link href={"/profile"}>Profile</Link>
              </li>
            </ul>*/}
            <input
              type="text"
              className="search-input"
              placeholder="SEARCH"
            />
            <button className="search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>

            <div className="flex flex-col mt-4 space-y-5 items md:hidden">
              <div className="flex items-center p-1 cursor-pointer hover:bg-pink-100 hover:dark:bg-pink-800" >
                <div className="w-full py-2 pl-1 text-black hover:text-" onClick={upload}> BECOME A CREATOR </div>
              </div>
              {currentUser ? (
                <div className="flex items-center p-1 cursor-pointer hover:bg-pink-100 hover:dark:bg-pink-800" >
                  <div className="w-full py-2 pl-1 text-black hover:text-white" onClick={logout} > LOGOUT </div>
                </div>
              ) : (
                <div className="flex items-center p-1 cursor-pointer hover:bg-pink-100 hover:dark:bg-pink-800" >
                  <div className="w-full py-2 pl-1 text-black hover:text-white" onClick={login}> LOGIN </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:flex md:items-center md:gap-x-8">
          <div className="flex items-center p-1 cursor-pointer hover:bg-pink-100 hover:dark:bg-pink-800" >
            <div className="w-full py-2 pl-1 text-black hover:text-" onClick={upload}> BECOME A CREATOR </div>
          </div>
          {currentUser ? (
            <div className="flex items-center p-1 cursor-pointer hover:bg-pink-100 hover:dark:bg-pink-800" >
              <div className="w-full py-2 pl-1 text-black hover:text-white" onClick={logout} > LOGOUT </div>
            </div>
          ) : (
            <div className="flex items-center p-1 cursor-pointer hover:bg-pink-100 hover:dark:bg-pink-800" >
              <div className="w-full py-2 pl-1 text-black hover:text-white" onClick={login}> LOGIN </div>
            </div>
          )}
        </div>
      </div>

    </nav>
  )
}

