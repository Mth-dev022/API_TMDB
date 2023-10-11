import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'

// PAGES
import App from './App.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search'
import Home from './pages/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "movie/:id",
        element: <Movie />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)