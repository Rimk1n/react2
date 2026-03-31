import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Categories from '../pages/Categories'
import Category from '../pages/Category'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/detail/:id', element: <Detail /> },
  { path: '/categories', element: <Categories /> },
  { path: '/category/all', element: <Navigate to="/" replace /> },
  { path: '/category/:id', element: <Category /> },
])