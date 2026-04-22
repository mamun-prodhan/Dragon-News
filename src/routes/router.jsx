import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/authlayout/Login";
import Register from "../components/authlayout/Register";
import NewsDetails from "../page/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";
import Loading from "../page/Loading";
import AboutPage from "../page/AboutPage";
import CareerPage from "../page/CareerPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                hydrateFallbackElement: <Loading></Loading>,
                loader: ()=>fetch("/news.json")
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/news-details/:id",
        element: (<PrivateRoutes>
            <NewsDetails></NewsDetails>
        </PrivateRoutes>),
        hydrateFallbackElement: <Loading></Loading>,
        loader: ()=> fetch("/news.json")
    },
    {
        path: "/about",
        element: <AboutPage></AboutPage>
    },
    {
        path: "/career",
        element: <CareerPage></CareerPage>
    },
    {
        path: "/*",
        element: <h2>Error 404</h2>
    }
])



export default router;