import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "../pages/Beranda";
import Login from "../pages/Login";
import App from "../App";
import Register from "../pages/Register";
import Pesanan from "../pages/Pesanan";
import Create from "../components/Create";
import Read from "../components/Read";
import Edit from "../components/Edit";



const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Beranda/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "register",
                element : <Register/>
            },
            {
                path : "pesanan",
                element : <Pesanan/>
            }
        ]
    },
    {
        path : "edit",
        element : <Edit/>
    },
    {
        path : "read",
        element : <Read/>
    },
    {
        path : "create",
        element : <Create/>
    }
])


export default router