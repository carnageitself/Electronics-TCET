import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Users from "./pages/Users";
import Attendance from "./pages/Attendance";
import Events from "./pages/Events";
import Kanban from "./pages/Kanban";
import New from "./pages/New";

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
        },
        {
          path : "/users/new",
          element: <New/>
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