import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Users from "./pages/Users";
import Attendance from "./pages/Attendance";
import Events from "./pages/Events";
import Kanban from "./pages/Kanban";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet/>
        <Footer/>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users/>
        },
        {
          path: "/attendance",
          element: <Attendance/>
        },
        {
          path: "/events",
          element: <Events/>
        },
        {
          path : "/kanban",
          element: <Kanban/>
        }
      ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;