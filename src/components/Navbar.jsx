import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Sidebar from "./Sidebar";
import { Divide as Hamburger } from 'hamburger-react'
import yash from "../assets/yashXD.jpg"
import logo from "../assets/tcet.png"

const Navbar = () => {
  const [side, setSide] = useState(false)
  const [open, setOpen] = useState(false)
  const {pathname} = useLocation()

  const currentUser = {
    admin: true
  }

  return (
    <div className="navbar flex flex-col items-center sticky z-10 top-0 bg-white shadow-lg">
      <div className="container w-full flex justify-between pl-3 pr-6 py-0 h-20 border-y">
        <div className="logo text-lg font-bold flex items-center">
            <div>
            <Hamburger toggled={side} toggle={setSide} />
            {side && <div className="top-16" onClick={side}><Sidebar/></div>}
            </div>
          <Link to="/" className="link flex pl-5 items-center">
            <img src={logo} alt="" className="w-10 h-10" />
            <span className="text pl-2 uppercase">Thakur College of Engineering and Technology</span>

          </Link>
        </div>
        <div className="links flex gap-6 items-center font-medium">
          <span> <DarkModeOutlinedIcon className="icon cursor-pointer"/></span>
          <div className="">
          <span><NotificationsNoneOutlinedIcon className="icon cursor-pointer"/></span>
          <div className="counter w-4 h-4 bg-red-500 text-white flex items-center justify-center text-xs font-bold absolute top-6 right-[145px] rounded-full">1</div>
          </div>
          <div className="">
          <span><ChatBubbleOutlineOutlinedIcon className="icon cursor-pointer"/></span>
          <div className="counter w-4 h-4 bg-red-500 text-white flex items-center justify-center text-xs font-bold absolute top-6 right-[92px] rounded-full">2</div>
          </div>
          {/*<span>Sign In</span>*/}
          
          {currentUser ? (
            <div className="user flex items-center gap-3 cursor-pointer relative" onClick={() => setOpen(!open)}>
              <img
                src={yash}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options absolute top-16 right-0 pl-10 py-5 bg-white border flex flex-col gap-5 w-[200px] font-normal rounded-xl bg-transparent">
                  {currentUser?.admin && (
                    <>
                      <Link to="/mygigs" className="link">Gigs</Link>
                      <Link to="/add" className="link">Add New Gig</Link>
                    </>
                  )}
                  <Link to="/orders" className="link">Orders</Link>
                  <Link to="/messages" className="link">Messages</Link>
                  <Link to="/" className="link">Log Out</Link>
                </div>
              )}
            </div>
          ): <button className="w-20 h-10 border text-black rounded cursor-pointer bg-transparent">LOGIN</button>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
