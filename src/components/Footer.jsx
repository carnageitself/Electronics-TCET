import React from 'react'
import { PiCopyrightLight } from "react-icons/pi";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer border-y h-16 flex items-center justify-center bg-slate-100">
     <div className="ml-10 font-title flex items-center gap-1">
      <PiCopyrightLight/> {currentYear} Thakur College of Engineering and Technology. All Rights Reserved.
     </div>
    </div>
  )
}

export default Footer