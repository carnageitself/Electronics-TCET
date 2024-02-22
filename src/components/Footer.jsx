import React from 'react'
import { PiCopyrightLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer border-y h-16 flex items-center justify-center">
     <div className="left ml-10 font-title flex items-center gap-1">
      <PiCopyrightLight/> 2024 Thakur College of Engineering & Technology. All Rights Reserved.
     </div>
    </div>
  )
}

export default Footer