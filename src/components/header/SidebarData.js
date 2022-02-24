import React from 'react';
import * as AiIcons from "react-icons/ai";



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/About',
        icon: <AiIcons.AiFillBulb />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    },
    {
        title: 'Signup',
        path: '/register',
        icon: <AiIcons.AiOutlineDesktop />,
        cName: 'nav-text'
    },

]

