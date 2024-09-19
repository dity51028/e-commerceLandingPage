import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Cart from './pages/Cart'
import Order from './pages/Order'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/fav"  element={<Favorites/>}/>
        <Route path="/order" element={<Order/>}/>
     </>
     
    )
  )

  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

