import React from 'react'
import Home from  '../../Screen/Home/Home'
import About from  '../../Screen/About/About'
import Contact  from  '../../Screen/Contact/Contact'

export  const AppRouterList =[
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/:id",
        element:<Home/>,
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact",
        element:<Contact/>,
    }]
