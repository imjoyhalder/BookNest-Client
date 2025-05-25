import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Policy from "../Components/Policy/Policy";
import BookDetails from "../Components/BookDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'contact',
                element: <h1>contact</h1>
            },
            {
                path: "bookDetails/:id",
                element: <BookDetails />,
                loader: ({ params }) =>
                    fetch(`https://book-nest-two-phi.vercel.app/books/${params.id}`),
            },

        ]
    },
]);