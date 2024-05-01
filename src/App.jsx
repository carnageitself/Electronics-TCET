import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Users from "./pages/Users";
import Classroom from "./pages/Classroom";
import Events from "./pages/Events";
import Kanban from "./pages/Kanban";
import New from "./pages/New";
import Login from "./pages/Login";
import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect, useState } from "react";
import Profile from "./pages/Profile";
import { userInputs } from "./constants/FormSource";
import { DarkModeContext } from "./context/DarkModeContext";
import Admin from "./pages/Admin";

function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser && children;
  };
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element:<RequireAuth><Layout /></RequireAuth>,
      children: [
        {
          path: "/",
          element:<Home /> ,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/classroom",
          element:<Classroom /> ,
        },
        {
          path: "/events",
          element:<Events /> ,
        },
        {
          path: "/kanban",
          element: <Kanban />,
        },
        {
          path: "/users/new",
          element: <New inputs={userInputs}/>,
        },
        {
          path: "/profile",
          element:<Profile /> ,
        },
        {
          path: "/user/profile/:id",
          element: <Profile />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
  ]);

  return (
    <div className={darkMode ? "dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
