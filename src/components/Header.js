import React from "react";
import Browser from "./Browser";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const a = useSelector((x) => x.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  // console.log(a);
  // {
  //   a.email !== true ? console.log("yes") : console.log("no");
  // }
  return (
    <div
      className="lg:px-[10vw] sm:px-10 md:px-5 px-5 flex justify-between
    w-full m-auto h-24 items-center"
    >
      <div className="">
        <img
          className="lg:w-48 md:w-32 sm:w-32 w-32"
          src="https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
      </div>
      <div className="">
        <button className="rounded mr-5 border border-['0.1px'] lg:px-10 px-3 py-0 sm:px-3 sm:py-1 ">
          English
        </button>
        {a == null ? (
          <Link
            to={"/login"}
            className="rounded bg-red-700 px-3 py-0 sm:px-3 sm:py-1 "
          >
            Sign In
          </Link>
        ) : (
          <button
            onClick={handleSignOut}
            className="rounded bg-red-700 px-3 py-0 sm:px-3 sm:py-1 "
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
  // px-3 py-1
};

export default Header;
