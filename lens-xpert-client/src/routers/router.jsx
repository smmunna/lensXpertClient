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
import Users from "../pages/Users/Users";
import Payment from "../pages/Payment/Payment";
import AddClass from "../pages/AddClass/AddClass";
import MyClass from "../pages/MyClass/MyClass";
import ManageClass from "../pages/MangeClass/ManageClass";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AdminPaymentHistory from "../pages/AdminPaymentHistory/AdminPaymentHistory";
import UserPaymentHistory from "../pages/UserPaymentHisoty/UserPaymentHistory";
import EnrolledCourse from "../pages/EnrolledCourse/EnrolledCourse";

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
        element: <PrivateRoutes><Classes /></PrivateRoutes>,
        loader:()=>fetch(`${import.meta.env.VITE_SERVER_API}/totalProducts`)
      },
      {
        path: "/instructors",
        element: <Instructor />
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [
          {
            path: "/dashboard",
            element: <PrivateRoutes><DashboardHome /></PrivateRoutes>
          },
          {
            path: "carts",
            element: <PrivateRoutes><Carts /></PrivateRoutes>
          },
          {
            path: "users",
            element: <PrivateRoutes><Users /></PrivateRoutes>
          },
          {
            path: "payment",
            element: <PrivateRoutes><Payment /></PrivateRoutes>
          },
          {
            path: "addclass",
            element: <PrivateRoutes><AddClass /></PrivateRoutes>
          },
          {
            path: "myclass",
            element: <PrivateRoutes><MyClass /></PrivateRoutes>
          },
          {
            path: "manageclass",
            element: <PrivateRoutes><ManageClass /></PrivateRoutes>
          },
          {
            path: "paymentshistory",
            element: <PrivateRoutes><AdminPaymentHistory /></PrivateRoutes>
          },
          {
            path: "userpaymenthistory",
            element: <PrivateRoutes><UserPaymentHistory /></PrivateRoutes>
          },
          {
            path: "enrolledcourse",
            element: <PrivateRoutes><EnrolledCourse /></PrivateRoutes>
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