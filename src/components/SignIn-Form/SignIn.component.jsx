import { Link } from "react-router-dom";
import {
  signInWithGoogle,
  signInWithEmailAndPassword,
} from "../../assets/firebase/firebase";
import React, { useState } from "react";

function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <>
      <div class="bg-blueGray-50">
        <div class="w-full lg:w-4/12 px-4 mx-auto pt-6 ">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#D9D9D9] border-0">
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="text-center mb-3">
                <h6 class="text-blueGray-500 text-sm font-Stevens ">
                  Sign in with
                </h6>
              </div>
              <div class="btn-wrapper text-center">
                <button
                  class="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img
                    alt="..."
                    class="w-5 mr-1"
                    src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                  />
                  Github
                </button>
                <button
                  class="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                  onClick={signInWithGoogle}
                >
                  <img
                    alt="..."
                    class="w-5 mr-1"
                    src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                  />
                  Google{" "}
                </button>
              </div>
              <hr class="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div class="text-blueGray-400 text-center mb-3 font-Stevens text-xl">
                <small>sign in with credentials</small>
              </div>
              <form>
                <div class="relative w-full mb-3">
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    class="font-Stevens text-xs border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    class="font-Stevens text-xs border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
                <div>
                  <label class="flex cursor-pointer justify-end ">
                    <span className="font-Stevens text-xs">
                      don’t have account?{" "}
                      <Link
                        to="/SignUp"
                        className="text-blue-600 hover:underline"
                      >
                        SIGN UP
                      </Link>{" "}
                    </span>
                  </label>
                </div>
                <div class="text-center mt-6">
                  <button
                    class="bg-blueGray-800 text-white active:bg-blueGray-600  bg-redlight-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 font-Collingar"
                    // type="submit"
                    type="button"
                    onClick={() => {
                      signInWithEmailAndPassword(loginEmail, loginPassword);
                    }}
                  >
                    {" "}
                    Sign In{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
