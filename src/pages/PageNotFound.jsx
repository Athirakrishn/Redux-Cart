
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
Link
function PageNotFound() {
  return (
    <>
    <Header/>
     <div style={{paddingTop:'80px'}} className="flex flex-col justify-center items-center">
      <img style={{width:'25%'}} src="https://assets-v2.lottiefiles.com/a/ba42fe86-117c-11ee-b932-3bed2adbeb47/ivbZPf5I6J.gif" alt="gif" />
      <h1 className='text-2xl font-bold'>Page Not Found</h1>
      <h5 className='my-4'>Sorry, we couldn't find the page</h5>
      <Link to={'/*'} className='rounded bg-green-600 p-2 text-white font-bold'>Goto Home</Link>
     </div>
    </>
  )
}

export default PageNotFound