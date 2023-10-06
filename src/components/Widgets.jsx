import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Tilt } from "react-tilt";

const Widgets = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  const isPositive = true;

  switch (type) {
    case "user":
      data = {
        title: "STUDENTS",
        isMoney: false,
        link: "See all Students",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon p-1 self-end"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "FACULTY",
        isMoney: false,
        link: "View all Faculty",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon p-1 self-end"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EVENTS",
        isMoney: false,
        link: "View all Events",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon p-1 self-end"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "ATTENDANCE",
        isMoney: false,
        link: "See Details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon p-1 self-end"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Tilt className="widget flex w-1/5 justify-between shadow-xl h-[130px] p-3 rounded-lg white-glassmorphism">
      <div className="left flex flex-col justify-between">
        <div className="title font-bold text-sm text-gray-600">
          {data.title}
        </div>
        <div className="counter text-lg">
          {data.isMoney && "$"} {amount}
        </div>
        <div className="link border-b cursor-pointer">{data.link}</div>
      </div>
      <div
        className={`right flex flex-col justify-between ${
          !isPositive ? "text-red-500" : "text-green-600"
        }`}
      >
        <div className="percentage flex items-center">
          {isPositive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}{" "}
          {diff} %
        </div>

        {data.icon}
      </div>
    </Tilt>
  );
};

export default Widgets;
