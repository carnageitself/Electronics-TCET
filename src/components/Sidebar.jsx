import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Hamburger from "hamburger-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const handleSignOut = async () => {
    await signOut(auth);
    setCurrentUser(null);
    showLogout();
    navigate("/login");
  };

  function showLogout() {
    Swal.fire({
      title: "Succesfully Logged Out",
      text: "",
      icon: "info",
      confirmButtonText: "Okay",
    });
  }

  const [open, setOpen] = React.useState(false);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const links1 = [
    {
      name: "Dashboard",
      link: "/",
      icon: DashboardOutlinedIcon,
    },
  ];

  const links2 = [
    {
      name: "Classroom",
      link: "/classroom",
      icon: SchoolOutlinedIcon,
    },
    {
      name: "Events",
      link: "/events",
      icon: EventAvailableOutlinedIcon,
    },
    {
      name: "Kanban",
      link: "/kanban",
      icon: ViewKanbanOutlinedIcon,
    },
  ];

  const links3 = [
    {
      name: "Profile",
      link: "/profile",
      icon: AccountBoxOutlinedIcon,
    },
    {
      name: "Log Out",
      link: "/login",
      icon: LogoutOutlinedIcon,
      onClick: handleSignOut,
    },
  ];

  const adminlink = [
    {
      name: "Admin",
      link: "/users",
      icon: AdminPanelSettingsOutlinedIcon,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="h-20 w-full flex items-center justify-center">
        <h1 className="font-semibold text-lg uppercase">{currentUser?.name}</h1>
      </div>
      <Divider />
      <List>
        {links1.map((item, index) => (
          <Link to={item.link}>
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={item.link}>
                <ListItemIcon style={{ color: "black" }}>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {links2.map((item, index) => (
          <Link to={item.link}>
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={item.link}>
                <ListItemIcon style={{ color: "black" }}>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <>
      {currentUser.admin && 
      <List>
        {adminlink.map((item, index) => (
          <Link to={item.link}>
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={item.link}>
                <ListItemIcon style={{ color: "black" }}>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>}
      </>
      <Divider />
      <List>
        {links3.map((item, index) => (
          <Link to={item.link}>
            <ListItem key={index} disablePadding onClick={() => item.onClick}>
              <ListItemButton component="a" href={item.link}>
                <ListItemIcon style={{ color: "black" }}>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Hamburger toggle={toggleDrawer(true)} size={30} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
