import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
    { path: '/',
        element: <Layout />,
        children: [
            {},
            {},
            {}

        ]
    }
])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
