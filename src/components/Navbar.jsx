import React, { useContext, useEffect, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Sidebar from "./Sidebar";
import { Divide as Hamburger } from "hamburger-react";
import yash from "../assets/yashXD.jpg";
import logo from "../assets/tcet.png";
import { DarkModeContext } from "../context/DarkModeContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [side, setSide] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { dispatch } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const { darkMode } = useContext(DarkModeContext);

  const handleSignOut = async () => {
    localStorage.removeItem("user");
    await signOut(auth);
    navigate("/login")
  };

  return (
    <div className={darkMode ? "dark" : "navbar flex flex-col items-center sticky z-10 top-0 bg-white"}>
      <div className="container w-full flex justify-between pl-3 pr-6 py-0 h-20 border-b">
        <div className="logo text-lg font-bold flex items-center">
          <div className="text-gray-700">
            <Hamburger toggled={side} toggle={setSide} size={30}/>
            </div>
            {side && (
              <div className="top-16">
                <Sidebar />
              </div>
            )}
          
          <Link to="/" className="link flex pl-5 items-center">
            <img src={logo} alt="" className="w-20 h-20 p-2" />
            <span className="text-[#DC6803] pl-2 title text-2xl font-semibold">
              Thakur College of Engineering & Technology
            </span>
          </Link>
        </div>
        <div className="links flex gap-6 items-center font-medium">
          <span>
            {" "}
            <DarkModeOutlinedIcon
              className="icon cursor-pointer hover:bg-gray-300 rounded-full"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </span>
          {/* <div className="">
          <span><NotificationsNoneOutlinedIcon className="icon cursor-pointer"/></span>
          <div className="counter w-4 h-4 bg-red-500 text-white flex items-center justify-center text-xs font-bold absolute top-6 right-[145px] rounded-full">1</div>
          </div>
          <div className="">
          <span><ChatBubbleOutlineOutlinedIcon className="icon cursor-pointer"/></span>
          <div className="counter w-4 h-4 bg-red-500 text-white flex items-center justify-center text-xs font-bold absolute top-6 right-[92px] rounded-full">2</div>
          </div> */}
          {/*<span>Sign In</span>*/}

          {currentUser ? (
            <div
              className="user flex items-center gap-3 cursor-pointer relative"
              onClick={() => setOpen(!open)}
            >
              <img src={yash} alt="" className="w-10 h-10 rounded-full" />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options absolute top-16 right-0 pl-10 py-5 bg-white border flex flex-col gap-5 w-[200px] font-normal rounded-xl bg-transparent">
                  {currentUser?.admin && (
                    <>
                      <Link to="/mygigs" className="link">
                        Admin
                      </Link>
                    </>
                  )}
                  <Link to="/users/profile" className="link">
                    Profile
                  </Link>
                  <span className="link" onClick={handleSignOut}>
                    Log Out
                  </span>
                </div>
              )}
            </div>
          ) : (
            <button className="w-20 h-10 border text-black rounded cursor-pointer bg-transparent">
              LOGIN
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
