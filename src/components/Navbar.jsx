import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Sidebar from "./Sidebar";
import { Divide as Hamburger } from "hamburger-react";
import logo from "../assets/tcet.png";
import { DarkModeContext } from "../context/DarkModeContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Swal from 'sweetalert2';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const Navbar = () => {

  const [side, setSide] = useState(false);
  const [open, setOpen] = useState(false);
  const { dispatch } = useContext(DarkModeContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  const handleSignOut = async () => {
    await signOut(auth);
    setCurrentUser(null)
    showLogout()
    navigate("/login");
  };

  function showLogout() {
    Swal.fire({
      title: "Succesfully Logged Out",
      text: '',
      icon: 'info',
      confirmButtonText: 'Okay'
    })
  }


  return (
    <div className='w-full h-20 border-b flex justify-between bg-white z-10 top-0 sticky px-5'>
       <div className="logo text-lg font-bold flex items-center">
        
         <Sidebar/>
          <Link to="/" className="link flex pl-5 items-center">
            <img src={logo} alt="" className="w-20 h-20 p-2" />
            <span className="text-[#DC6803] pl-2 title text-2xl font-semibold">
              Thakur College of Engineering & Technology
            </span>
          </Link>
        </div>
        <div className="links flex gap-6 items-center font-medium">
          {/* <span>
            {" "}
            <DarkModeOutlinedIcon
              className={darkMode ? "dark cursor-pointer rounded-full" : "icon cursor-pointer hover:bg-slate-100 rounded-full"}
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </span> */}
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
              className="user flex items-center gap-3  relative"
              onClick={() => setOpen(!open)}
             
            >
              <Tooltip title={currentUser?.name} TransitionComponent={Zoom}>
                <Link to="/profile">
              <img
                src={currentUser?.img}
                alt=""
                className="w-12 h-12 rounded-full cursor-pointer ring-2 ring-slate-300 p-[1px]"
              />
              </Link>
              </Tooltip>

              {/* {open && (
                <div className="options absolute top-16 right-0 py-5 px-3 bg-white border flex flex-col gap-2 w-[200px] font-normal rounded-xl">
                  <span className="p-2">{currentUser?.name}</span>
                  {currentUser?.admin && (
                    <>
                      <Link
                        to="/users"
                        className="link cursor-pointer hover:bg-slate-100 p-2 text-green-500"
                      >
                        Admin
                      </Link>
                    </>
                  )}
                  <Link
                    to="/profile"
                    className="link cursor-pointer  hover:bg-slate-100 p-2"
                  >
                    Profile
                  </Link>
                  <span
                    className="link cursor-pointer  hover:bg-slate-100 p-2 text-red-500"
                    onClick={handleSignOut}
                  >
                    Log Out
                  </span>
                </div>
              )} */}
            </div>
          ) : (
            <button className="w-20 h-10 border text-black rounded cursor-pointer bg-transparent">
              LOGIN
            </button>
          )}
        </div>
      </div>
  )
}

export default Navbar