import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Protected from "../protected/Protected";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/sign-up',
        element: <SignUp></SignUp>
    },
    {
        path: '/home',
        element: <Protected> <Home> </Home> </Protected>
    }
])