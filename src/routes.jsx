import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./screens/LandingPage"
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const router = createBrowserRouter([
    {
        path:"/",
        element:<LandingPage/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    }
])

export default router;