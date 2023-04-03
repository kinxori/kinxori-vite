import React from 'react'
import ReactDOM from 'react-dom/client'
import './../_index.css'
import Home from "../routes/Home/Home"
import Error404 from '../components/Error404/Error404'
import Projects from '../routes/Projects'
import AboutMe from '../routes/AboutMe/AboutMe'
import Contact from '../routes/Contact'

import { 
  createBrowserRouter, 
  RouterProvider, 
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error404/>,
    children: [
    {
      path: "/projects",
      element: <Projects/>
    },
    {
      path: "/about",
      element: <AboutMe/>
    },
    {
      path: "/contact",
      element: <Contact/>
    }
  ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
