import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const Browser = () => {
  const userInfo = useSelector((x) => x?.user);
  console.log(userInfo);
  return (
    <>
      <Header />
      <div className="text-center">Hello there {userInfo?.displayName}!🫶</div>
      <div>Browser</div>
    </>
  );
};

export default Browser;
