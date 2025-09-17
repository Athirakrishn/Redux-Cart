
import { useEffect, useState } from "react"
// import { addToCart } from `../Redux/slices/cartSlice`
// import Header from "../components/Header"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToWishlist } from "../redux/slices/wishlistSlice"
import Header from "../Components/Header"
import { addToCart } from "../redux/slices/cartSlice"

const View = () => {
  const userWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const { id } = useParams()
  // console.log(id);

  // state to get the details of the id's product
  const [product, setProduct] = useState({})
  useEffect(() => {
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts.find(item => item.id == id))
  }, [])
  // console.log(product);
  const handleAddToWishlist = () => {
    // check product is in store's wishlist
    const existingProduct = userWishlist?.find(item => item.id == product.id)
    if (existingProduct) {
      alert("Product already exist in your wishlist.. Add another!!!")
    } else {
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = () => {
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item => item.id == product.id)
    if (existingProduct) {
      alert("Product Updated Successfully")
    }
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className='grid lg:grid-cols-2 gap-4 items-center'>
        <div className='flex flex-col justify-center items-center'>
          <img width={'350px'} height={'100px'} src={product?.thumbnail} alt="products" />
          <div className='flex justify-between items-center w-full px-6 pt-10'>
            <button onClick={handleAddToWishlist} className='bg-blue-700 p-2 rounded text-white '>ADD TO WISHLIST</button>
            <button onClick={handleCart} className='bg-green-700 p-2 rounded text-white '>ADD TO CART</button>
          </div>
        </div>
        <div className='p-5'>
          <h1 className="text-4xl font-bold">{product?.title}</h1>
          <h2 className="text-xl text-red-500 font-bold">$ {product?.price}</h2>
          <h3 className="text-xl mt-3"><span className='font-bold'>Brand</span> : {product?.brand}</h3>
          <h3 className="text-xl"><span className='font-bold'>Category</span> : {product?.category}</h3>
          <h3 className="text-xl text-justify"><span className='font-bold'>Description</span> : {product?.description}</h3>
          <h1 className="text-xl font-bold mt-5">Client Reviews</h1>
          {/* reviews to be duplicated */}
          {product?.reviews?.length > 0 &&
            product?.reviews?.map(item => (
              <div className="rounded shadow my-3 p-2">
                <p><span className='font-bold'>{item?.reviewerName}</span> : {item?.comment} </p>
                <p>Rating : {item?.rating} <i className='fa-solid fa-star text-yellow-400'></i></p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default View