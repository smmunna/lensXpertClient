import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes";
import Instructor from "../pages/Instructors/Instructor";
import Error from "../components/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Dashboard from "../layouts/Dashboard";
import Carts from "../pages/Carts/Carts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/classes",
        element: <PrivateRoutes><Classes /></PrivateRoutes>
      },
      {
        path: "/instructors",
        element: <Instructor />
      },
      {
        path:"/dashboard",
        element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
        children:[
          {
            path:"carts",
            element:<PrivateRoutes><Carts/></PrivateRoutes>
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "*",
    element: <Error />
  }
]);

export default router;