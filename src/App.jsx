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
import Attendance from "./pages/Attendance";
import Events from "./pages/Events";
import Kanban from "./pages/Kanban";
import New from "./pages/New";
import Login from "./pages/Login";
import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect, useState } from "react";
import Profile from "./pages/Profile";
import { userInputs } from "./constants/FormSource";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <>
        <Navbar/>
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
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <RequireAuth>
              {" "}
              <Home />
            </RequireAuth>
          ),
        },
        {
          path: "/users",
          element: (
            <RequireAuth>
              {" "}
              <Users />
            </RequireAuth>
          ),
        },
        {
          path: "/attendance",
          element: (
            <RequireAuth>
              <Attendance />
            </RequireAuth>
          ),
        },
        {
          path: "/events",
          element: (
            <RequireAuth>
              <Events />
            </RequireAuth>
          ),
        },
        {
          path: "/kanban",
          element: (
            <RequireAuth>
              {" "}
              <Kanban />
            </RequireAuth>
          ),
        },
        {
          path: "/users/new",
          element: (
            <RequireAuth>
              <New inputs={userInputs} title="Add New User" />
            </RequireAuth>
          ),
        },
        {
          path: "/users/:userid",
          element: (
            <RequireAuth>
              <Profile />
            </RequireAuth>
          ),
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
