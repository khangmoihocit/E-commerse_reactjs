import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(()=>import('@components/HomePage/HomePage'))
    },
    {
        path: '/blog',
        component: lazy(()=> import('@components/Header/Header'))
    }
];

export default routers;