import React, { useContext } from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
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
import SchoolIcon from '@mui/icons-material/School';
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="sidebar flex-1 h-screen w-52 top-20 absolute bg-slate-50 z-10 left-0">
      <hr className="h-0 border pl-10"/>
      
        <ul className="list-none m-0 p-0">
          <p className="title mt-3 mb-2 text-xs font-bold pl-2">MAIN</p>
            <Link to="/">
          <li className="flex items-center p-2 cursor-pointer hover:bg-slate-200">
            <DashboardRoundedIcon className="icon text-lg" />
            <span className="ml-2 text-xs font-semibold">Dashboard</span>
          </li>
            </Link>
          <p className="title mt-3 mb-2 text-xs font-bold pl-2">LISTS</p>
          <Link to="/users">
          {currentUser.admin && <li className="flex items-center p-2 text-xs cursor-pointer font-semibold  hover:bg-slate-200">
            <PeopleAltOutlinedIcon className="icon" />
            <span className="ml-2">Admin</span>
          </li>}
          </Link>
          <Link to="/classroom">
          <li className="flex items-center p-2 text-xs cursor-pointer font-semibold hover:bg-slate-200">
            <SchoolIcon className="icon" />
            <span className="ml-2">Classroom</span>
          </li>
          </Link>
          <Link to ="/events">
          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold hover:bg-slate-200">
            <EventAvailableOutlinedIcon className="icon" />
            <span className="ml-2">Events</span>
          </li>
          </Link>
          <Link to="/kanban">
          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold hover:bg-slate-200">
            <DesktopWindowsOutlinedIcon className="icon" />
            <span className="ml-2">Kanban</span>
          </li>
          </Link>
          <p className="title mt-5 mb-2 text-xs font-bold pl-2">USEFUL</p>
          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold hover:bg-slate-200">
            <QueryStatsOutlinedIcon className="icon" />
            <span className="ml-2">Stats</span>
          </li>
          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold hover:bg-slate-200">
            <NotificationsActiveOutlinedIcon className="icon" />
            <span className="ml-2">Notifications</span>
          </li>
          <p className="title mt-5 mb-2 text-xs font-bold pl-2">SERVICE</p>
          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold hover:bg-slate-200">
            <SystemUpdateAltOutlinedIcon className="icon" />
            <span className="ml-2">System Health</span>
          </li>

          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold hover:bg-slate-200">
            <SyncAltOutlinedIcon className="icon" />
            <span className="ml-2">Logs</span>
          </li>

          <li className="flex items-center p-2 text-xs  cursor-pointer font-semibold hover:bg-slate-200">
            <SettingsSuggestOutlinedIcon className="icon" />
            <span className="ml-2">Settings</span>
          </li>
          <p className="title mt-5 mb-2 text-xs font-bold pl-2">USER</p>
          <Link to="/profile">
          <li className="flex items-center p-2 text-xs cursor-pointer font-semibold hover:bg-slate-200">
            <AccountBoxOutlinedIcon className="icon" />
            <span className="ml-2">Profile</span>
          </li>
          </Link>
          <li className="flex items-center p-2 text-xs cursor-pointer font-semibold hover:bg-slate-200">
            <LogoutOutlinedIcon className="icon" />
            <span className="ml-2">Log Out</span>
          </li>
        </ul>
      </div>
  );
};

export default Sidebar;
