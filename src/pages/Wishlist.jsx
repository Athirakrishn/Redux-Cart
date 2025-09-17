import React from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'


const Wishlist = () => {
  const ourWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  const handleCart = (product) => {
    dispatch(removeWishlistItem(product?.id))
      dispatch(addToCart(product))
      const existingProduct = userCart?.find(item => item.id == product.id)
      if (existingProduct) {
        alert("Product Updated Successfully")
      }
    }

  return (
    <>
      <Header />
      <div className='mx-5' style={{ paddingTop: '100px' }}>
        <div className="text-3xl font-bold text-center my-5 text-red-600">My Wishlist</div>
        <div className='grid grid-cols-4 gap-4'>
          {/* duplicate div according to the product array */}
          {
            ourWishlist?.length>0?
            ourWishlist?.map(product=>(
              < div className="rounded p-2 shadow">
            {/* image */}
            <img className='mx-auto' width={'200px'} src={product?.thumbnail} alt="product" />
            <div className='text-center'>
              {/* title  */}
              <h3 className='font-bold text-xl'>{product?.title}</h3>
              <div className="flex justify-evenly my-3">
                <button><i onClick={()=>dispatch(removeWishlistItem(product.id))} className="fa-solid fa-heart-circle-xmark text-xl text-red-600"></i></button>
                <button><i onClick={()=>handleCart(product)} className="fa-solid fa-cart-plus text-xl text-green-600"></i></button>
              </div>
            </div>
          </div>
            ))
            :
            <p className='text-xl text-center my-10 font-bold'>Wishlist is Empty!!</p>
          }
        </div>
      </div >
    </>
  )
}

export default Wishlist