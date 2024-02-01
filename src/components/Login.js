import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpform = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      {/* max-xxs:bg-black */}
      <div className="  max-xxs:bg-black ">
        <Header />
        <div className="img-div">
          <img
            className="img hidden sm:block  "
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          />
        </div>
      </div>
      <div className="grid absolute top-0 f text-white">
        <div className="f-in px-16 max-xxs:px-0 max-xxs:pt-0 pt-12 pb-24">
          <header className="mb-5">
            <h1 className=" font-bold text-3xl">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
          </header>
          <form className="">
            {!isSignInForm && (
              <>
                <div class="relative">
                  <input
                    type="text"
                    id="floating_filled"
                    class="block rounded-md p-4 w-full text-sm mb-7 text-black bg-[#30303096] border border-gray-400  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_filled"
                    class="absolute pl-4 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-1.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Name
                  </label>
                </div>
                <div class="relative">
                  <input
                    type="date"
                    id="floating_filled"
                    class="block rounded-md p-4 w-full text-sm mb-7 text-black bg-[#30303096] border border-gray-400  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_filled"
                    class="absolute pl-4 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-1.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    {/* 01/01/0000 */}
                  </label>
                </div>
              </>
            )}
            <div class="relative">
              <input
                type="text"
                id="floating_filled"
                class="block rounded-md p-4 w-full text-sm mb-7 text-black bg-[#30303096] border border-gray-400  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute pl-4 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-1.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email or Phone number
              </label>
            </div>
            <div class="relative">
              <input
                type="text"
                id="floating_filled"
                class="block rounded-md p-4 w-full text-sm mb-7 text-black bg-[#30303096] border border-gray-400  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute pl-4 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-1.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Password
              </label>
            </div>

            <button className="w-full bg-[#e50914] p-2 mb-5 rounded-md font-medium">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <footer>
            <div>
              <input type="checkbox" />
              <label> Remember me </label>
            </div>
            <div>
              <p className=" text-slate-400">
                {/* <form> */}
                {isSignInForm ? " New to Netflix? " : "Already have? "}
                <button
                  className=" text-white underline"
                  onClick={toggleSignUpform}
                >
                  {/* Sign {isSignInForm ? "up" : "in"} now. */}
                  {isSignInForm ? "Sign Up now." : "Sign in now."}
                </button>
                {/* </form> */}
              </p>
            </div>
            <small>
              This page is protected by Google reCAPTCHA to <br />
              ensure you're not a bot. Learn more.
            </small>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Login;
