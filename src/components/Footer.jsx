import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-orange-600 rounded text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 drop-shadow-2xl">
            <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5"><span className="text-teal-400">Get</span>in touch..</h1>

            <div className="">
                <input type="email" name="" id="" placeholder="Email" className="text-gray-800 sm:w-72 
                w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
                <button className="bg-orannge-500 border-inherit hover:bg-white duration-300 px-5 py-2.5 rounded-md hover:text-orange-700
                md:w-auto w-full">Subscribe</button>
            </div>
        </div>
        <div className="bg-[#f8d0af] inline-flex-box text-center rounded ml-1 mr-1 mt-2 p-6">
              <ul className='text-orange-600/60 text-md inline-flex'>
                <li className='m-3'><a href="http://">Delivery</a></li>
                <li className='m-3'><a href="http://">About</a></li>
                <li className='m-3'><a href="http://">Careers</a></li>
                <li className='m-3'><a href="http://">Contact</a></li>
              </ul>
            </div>
    </footer>
  )
}

export default Footer