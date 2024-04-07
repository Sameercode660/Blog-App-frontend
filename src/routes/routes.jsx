import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Protected from "../protected/Protected";
import Home from "../pages/Home";
import AllBlog from "../pages/AllBlog";
import MyBlog from "../pages/MyBlog";
import PostBlog from "../pages/PostBlog";
import Main from "../pages/Main";


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
        element: <Protected> <Home> </Home> </Protected>,
        children: [
            {
                path: '',
                element: <Main></Main>
            },

            {
                path: 'allblog',
                element: <AllBlog></AllBlog>
            },
            {
                path: 'my-blog',
                element: <MyBlog></MyBlog>
            },
            {
                path: 'post-blog',
                element: <PostBlog></PostBlog>
            }
        ]
    }
])