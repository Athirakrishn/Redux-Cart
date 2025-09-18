
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from "../redux/slices/cartSlice"
import Header from "../components/Header"


const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userCart = useSelector(state => state.cartReducer)
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    if (userCart?.length > 0) {
      setTotalCart(Math.ceil(userCart?.map(item => item.totalPrice)?.reduce((prev, curr) => prev + curr)))
    }
  }, [userCart])

  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product.id))
    } else {
      dispatch(removeCartItem(product.id))
    }
  }

  const checkOut = () => {
    dispatch(emptyCart)
    alert("Your Order has been placed Successfully... Thankyou for shopping with us !!!")
    navigate('/')
  }

  return (
    <>
      <Header />
      <div className='mx-5' style={{ paddingTop: '100px' }}>
        <div className="text-5xl font-bold my-10">Card Summary</div>
        {
          userCart?.length > 0 ?
            <div className='grid grid-cols-3 gap-4'>
              {/* table  */}
              <div className="col-span-2 rounded shadow p-5">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <td className="font-semibold">SL.No</td>
                      <td className="font-semibold">Name</td>
                      <td className="font-semibold">Image</td>
                      <td className="font-semibold">Quantity</td>
                      <td className="font-semibold">Price</td>
                      <td className="font-semibold">...</td>
                    </tr>
                  </thead>
                  <tbody>
                    {/* duplicate according to cart array */}
                    {
                      userCart?.map((product, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td><Link to={`/${product?.id}/view`} className='text-blue-500 underline'>{product?.title.slice(0, 20)}...</Link></td>
                          <td><img width={'40px'} height={'40px'} src={product?.thumbnail} alt="product" /></td>
                          <td>
                            <div className="flex">
                              <button onClick={() => handleDecrementQuantity(product)} className="font-bold">-</button>
                              <input className='border p-1 mx-3 rounded' style={{ height: '25px', width: "30px" }} type="text" value={product?.quantity} readOnly />
                              <button onClick={() => dispatch(incrementQuantity(product?.id))} className="font-bold">+</button>
                            </div>
                          </td>
                          <td>$ {product?.totalPrice}</td>
                          <td><button onClick={() => dispatch(emptyCart)}><i className="fa-solid fa-trash text-red-600 cursor-pointer"></i></button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <div className="float-right mt-4">
                  <button className="bg-red-600 text-white text-lg p-1 inline-block rounded mx-2">EMPTY CART</button>
                  <Link to={'/'} className="bg-blue-600 text-white text-lg p-1 inline-block rounded mx-2">SHOP MORE</Link>
                </div>
              </div>
              {/* total  */}
              <div className="col-span-1 rounded shadow p-5">
                <h2 className="font-bold text-2xl mb-4">Total Amount : <span className='text-red-600'>$ {totalCart}</span></h2>
                <hr />
                <button onClick={checkOut} className="rounded bg-green-600 p-2 text-white mt-4 w-full text-xl">CHECK OUT</button>
              </div>

            </div>
            :
            <div className='flex justify-center items-center h-70 flex-col my-10'>
              <img className='w-100' src="https://hakimitr.com/assets/website/images/empty-cart.gif" alt="" />
              <p className='text-center font-bold my-10 text-xl'>Your Cart is Empty..</p>
              <Link className='bg-rose-700 rounded p-2 text-white ' to={'/'}>Back to Home</Link>
            </div>
        }
      </div>
    </>
  )
}

export default Cart