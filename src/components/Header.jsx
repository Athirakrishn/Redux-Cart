import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  return (
    <nav className='flex w-full bg-rose-800 text-white font-bold fixed p-5 justify-between text-lg'>
      <Link className=' text-2xl' to={'/'}> <i className="fa-solid fa-truck-fast "></i> <span>Daily Cart</span></Link>
      <ul className='flex'>
        <li className='mx-5'><Link to={'/wishlist'}> <i className="fa-solid fa-heart me-1 text-red-600"></i>Wishlist<span className='p-1 bg-black ms-1 rounded-full'>{userWishlist?.length}</span></Link></li>
      <li className='mx-5'><Link to={'/cart'}> <i className="fa-solid fa-cart-shopping me-1 text-green-600"></i>Cart<span className='p-1 bg-black ms-1 rounded-full'>{userCart?.length}</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header