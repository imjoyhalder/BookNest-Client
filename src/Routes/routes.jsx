import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Policy from "../Components/Policy/Policy";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/', 
                element: <Home></Home>, 
                // children: [
                //     {
                //         path:'policy', 
                //         element: <Policy></Policy>
                //     }
                // ]
            },
            {
             path: 'contact' , 
             element: <h1>contact</h1>  
            }
        ]
    },
]);