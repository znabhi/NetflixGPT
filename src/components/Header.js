import React from "react";
import Browser from "./Browser";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";
import Login from "./Login";
const Header = () => {
  const a = useSelector((x) => x.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    //unsibuscribing
    return () => unsubscribe();
  }, []);

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
};

export default Header;
