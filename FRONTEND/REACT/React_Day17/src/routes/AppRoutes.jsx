import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layout/MainLayout'
import ProtectedRoutes from './ProtectedRoutes'
import PublicRoute from './PublicRoute'
import { Auth } from '../context/AuthContext'
import HomePage from '../pages/HomePage'
import UsersPage from '../pages/UsersPage'
import ProductsPage from '../pages/ProductsPage'

const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path : '/',
            element : <PublicRoute/>,
            children : [
                {
                    path : '',
                    element : <AuthLayout/>,
                    children : [
                        {
                            path : '',
                            element : <Login/>
                        },
                        {
                            path : 'register',
                            element : <Register/>
                        }
                    ]

                }
            ]
        },
        {
            path : "/main",
            element : <ProtectedRoutes/>,
            children : [{
                path : '',
                element : <MainLayout/>,
                children : [
                    {
                        path : '',
                        element : <HomePage/>
                    },
                    {
                        path : 'users',
                        element : <UsersPage/>
                    },
                    {
                        path : 'products',
                        element : <ProductsPage/>
                    }
                ]
            }]
        }
    ])

  return <RouterProvider router = {router}/>
}

export default AppRoutes
