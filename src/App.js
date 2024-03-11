import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";


const AppLayout = () =>{
    return (
       <>
       <Header />
       <Outlet/>
       <Footer />
       </>
    );
};

const Routerdata = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Body />
        },{
          path:"/about",
          element:<About/>,
          children:[
            {
             path:"profile",
             element:<Profile/>
          },
         ],
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/restaurant/:id",
          element:<RestaurantMenu />
        
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Routerdata}/>);