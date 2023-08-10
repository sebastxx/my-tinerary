import './App.css'
import Layout from './Layout'
import Home from './pages/Home/index'
import Cities from './pages/Cities/index'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path:'/', element: <Layout />, 
    children: [
      { path:'/', element: <Home /> },
      { path:'/cities', element: <Cities /> },
      { path:'/cities/:id', element: <Cities /> }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
