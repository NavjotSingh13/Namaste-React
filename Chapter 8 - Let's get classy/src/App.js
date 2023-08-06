import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import About from './components/About';
import Contact from "./components/Contact";
import Body from "./components/Body";
import Error from "./components/Error";
import SingleRestaurant from "./components/SingleRestaurant";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },

            {
                path: '/about',
                element: <About />
            },
        
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <SingleRestaurant />
            }

        ],
        errorElement: <Error />
    },

    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);