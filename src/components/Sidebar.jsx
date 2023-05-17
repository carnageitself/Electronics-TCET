import React from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar flex-1 h-52 w-52 top-20 absolute bg-white border-r z-10 left-0 pl-2">
      <hr className="h-0 border pl-10"/>
      <div className="center border-r">
        <ul className="list-none m-0 p-0 bg-white">
          <p className="title mt-3 mb-2 text-xs font-bold">MAIN</p>
            <Link to="/">
          <li className="flex items-center p-2 cursor-pointer">
            <DashboardRoundedIcon className="icon text-lg" />
            <span className="ml-2 text-xs font-semibold">Dashboard</span>
          </li>
            </Link>
          <p className="title mt-3 mb-2 text-xs font-bold">LISTS</p>
          <Link to="/users">
          <li className="flex items-center p-2 text-xs cursor-pointer font-semibold">
            <PeopleAltOutlinedIcon className="icon" />
            <span className="ml-2">Users</span>
          </li>
          </Link>
          <Link to="/attendance">
          <li className="flex items-center p-2 text-xs cursor-pointer font-semibold">
            <BorderColorOutlinedIcon className="icon" />
            <span className="ml-2">Attendance</span>
          </li>
          </Link>
          <Link to ="/events">
          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold">
            <EventAvailableOutlinedIcon className="icon" />
            <span className="ml-2">Events</span>
          </li>
          </Link>
          <Link to="/kanban">
          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold">
            <DesktopWindowsOutlinedIcon className="icon" />
            <span className="ml-2">Kanban</span>
          </li>
          </Link>
          <p className="title mt-5 mb-2 text-xs font-bold">USEFUL</p>
          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold">
            <QueryStatsOutlinedIcon className="icon" />
            <span className="ml-2">Stats</span>
          </li>
          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold">
            <NotificationsActiveOutlinedIcon className="icon" />
            <span className="ml-2">Notifications</span>
          </li>
          <p className="title mt-5 mb-2 text-xs font-bold">SERVICE</p>
          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold">
            <SystemUpdateAltOutlinedIcon className="icon" />
            <span className="ml-2">System Health</span>
          </li>

          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold">
            <SyncAltOutlinedIcon className="icon" />
            <span className="ml-2">Logs</span>
          </li>

          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold">
            <SettingsSuggestOutlinedIcon className="icon" />
            <span className="ml-2">Settings</span>
          </li>
          <p className="title mt-5 mb-2 text-xs font-bold">USER</p>
          <li className="flex items-center p-2 text-xs cursor-pointer font-semibold">
            <AccountBoxOutlinedIcon className="icon" />
            <span className="ml-2">Profile</span>
          </li>
          <li className="flex items-center p-2 text-xs cursor-pointer font-semibold">
            <LogoutOutlinedIcon className="icon" />
            <span className="ml-2">Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
