import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            
                <div style={{ height: '250px', marginTop: '100px' }} className="w-full bg-rose-800 text-white px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-20">
                        {/* Left Section */}
                        <div className="md:col-span-2 font-sans">
                            <Link className=' text-xl font-bold' to={'/'}> <i className="fa-solid fa-truck-fast "></i> <span>Daily Cart</span></Link>
                            <p className="mt-3 text-base leading-relaxed">
                                Designed and built with all the love in the world by the Luminar Team with the help of our contributors.
                                <br />
                                Code licensed Luminar, docs CC BY 3.0 Currently v5.3.2
                            </p>
                        </div>

                        {/* Links */}
                        <div className='md:col-span-1 w-fit'>
                            <h1 className="text-xl font-bold ms-">Links</h1>
                            <ul className="mt-3 space-y-2 text-base">
                                <Link to={'/'}><li className="hover:text-rose-300 cursor-pointer">Home</li></Link>
                                <Link to={'/wishlist'}><li className="hover:text-rose-300 cursor-pointer">Wishlist</li></Link>
                                <Link to={'/cart'}><li className="hover:text-rose-300 cursor-pointer">Cart</li></Link>
                            </ul>
                        </div>

                        {/* Guides */}
                        <div className='md:col-span-1 w-fit'>
                            <h1 className="text-xl font-bold">Guides</h1>
                            <ul className="mt-3 space-y-2 text-base">
                                <a href='https://react.dev/'><li className="hover:text-rose-300 cursor-pointer">React</li></a>
                                <a href='https://react-bootstrap.github.io/'><li className="hover:text-rose-300 cursor-pointer">React Bootstrap</li></a>
                                <a href='https://reactrouter.com/'><li className="hover:text-rose-300 cursor-pointer">React Router</li></a>
                                <a href='https://tailwindcss.com/'><li className="hover:text-rose-300 cursor-pointer">Tailwind CSS</li></a>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className='md:col-span-2'>
                            <h1 className="text-xl font-bold">Contact Us</h1>
                            <form className="mt-3">
                                <div className="flex items-center space-x-3">
                                    <input type="text" placeholder="Enter Your Email" className="w-full px-3 py-2 rounded-md bg-white text-black border border-gray-300" />
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </form>

                            {/* Social Icons */}
                            <div className="flex justify-between items-center mt-6 text-xl">
                                <i className="fa-brands fa-facebook cursor-pointer hover:text-rose-300"></i>
                                <i className="fa-brands fa-instagram cursor-pointer hover:text-rose-300"></i>
                                <i className="fa-brands fa-x-twitter cursor-pointer hover:text-rose-300"></i>
                                <i className="fa-brands fa-linkedin cursor-pointer hover:text-rose-300"></i>
                                <i className="fa-brands fa-github cursor-pointer hover:text-rose-300"></i>
                                <i className="fa-solid fa-phone cursor-pointer hover:text-rose-300"></i>
                            </div>
                        </div>
                    </div>

                    <p className="text-center mt-10 text-base">
                        Copyright © May 2025 Batch, Daily Cart. Built with React Redux.
                    </p>
                </div>
            
        </>
    )
}

export default Footer