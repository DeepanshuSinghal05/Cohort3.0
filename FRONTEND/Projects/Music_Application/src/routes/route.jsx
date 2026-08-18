import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import FavSongs from "../pages/FavSongs";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ArtistDashboard from "../pages/ArtistDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children : [
            {
                path : '',
                element : <HomePage/>
            },
            {
                path : 'favsongs',
                element : <FavSongs/>
            },
            {
                path : 'login',
                element : <LoginPage/>
            },
            {
                path : 'register',
                element : <RegisterPage/>
            },
            {
                path : 'artistdashboard',
                element : <ArtistDashboard/>
            }
        ]
    }
])

export default router