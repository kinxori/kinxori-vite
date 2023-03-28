import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "../routes/Home"
import Error404 from '../components/Error404'
import { 
  createBrowserRouter, 
  RouterProvider, 
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error404/>
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
