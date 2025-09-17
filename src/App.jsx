import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PageNotFound from './Pages/PageNotFound'
import View from './Pages/View'
import Wishlist from './Pages/Wishlist'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/:id/view' element={<View/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
