import React from "react";

const Header = () => {
  return (
    <div
      className="absolute lg:px-[10vw] sm:px-10 md:px-5 px-5 flex justify-between
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
        <button className="rounded bg-red-700 px-3 py-0 sm:px-3 sm:py-1 ">
          Sign In
        </button>
      </div>
    </div>
  );
  // px-3 py-1
};

export default Header;
