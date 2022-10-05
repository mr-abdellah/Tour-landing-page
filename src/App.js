import "./styles/app.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer/Footer";
import Destinations from "./pages/Destinations";
import { Navigate } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("user"));

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
    path: "/",
    element: user?.loggedIn ?<Layout />:<Navigate to='/register' />,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/destinations",
        element: <Destinations/>,
      },
      {
        path: "/about",
        element: <h3>hiii about</h3>,
      },
      {
        path: "/partner",
        element: <h3>hiii</h3>,
      },
    ],
  },
  {
    path: "/login",
    element: user?.loggedIn ? <Navigate to="/" /> : <Login />,
  },
  {
    path: "/register",
    element: user?.loggedIn ? <Navigate to="/login" /> : <Register />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
