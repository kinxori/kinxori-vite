import React from 'react'
import ReactDOM from 'react-dom/client'
import './../_index.css'
import Home from "../routes/Home/Home"
import Error404 from '../components/Error404/Error404'
import Projects from '../routes/Projects/Projects'
import AboutMe from '../routes/AboutMe/AboutMe'
import Contact from '../routes/Contact/Contact'
import ShoppingCartFeature from '../routes/Projects/demos/demo1/ShoppingCartFeature'
import { 
  createBrowserRouter, 
  RouterProvider, 
} from 'react-router-dom'

// const EmojiAPI = "https://emoji-api.com/emojis?access_key=0485af6bad82b18a33db25fe3e292cf0e790dc72"

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
      element: <Contact/>,
      // loader: async()=>await((await fetch(EmojiAPI)).json()),
    },
  ],
  },
  {
    path: "/projects/shopping-cart-feature",
    element: <ShoppingCartFeature/>,
  },
  {
    path: "/projects/search-bar-feature",
    element: null,
  },
  {
    path: "/projects/fetch-api",
    element: null,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
