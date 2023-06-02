import React from 'react'
import petal from '../assets/petals.png'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
        <div className='hidden sm:block bg-black'>
            <div className='hidden sm:block bg-black border rounded-lg m-20px'></div>
        </div>

        <div className='bg-white-800 flex flex-col justify-center items-center'>
        <img className='w-16 h-14 mb- -1' src={petal} alt="Petal Image" />
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'>
               <div className='w-full flex justify-evenly ma-0'><p className='  font-bold font-34 font-poppins font-normal'> <span className='text-4xl text-black text-center mr-4'>Welcome</span><span className='text-4xl text-teal-500 text-center'>Back!</span></p></div>
                
                <div className='flex flex-col text-gray-400 py-2'>
                    <input className='rounded-lg bg-white-700 mt-2 p-2 
                    border border-#464660 hover:border-purple-700 focus:border-blue-500 focus:bg-white-800 focus:outline' placeholder='Enter your email' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    
                    <input className='p-2 rounded-lg bg-white-700 mt-2  border border-# hover:border-purple-700 focus:border-blue-500 focus:bg-white-800 focus:outline' placeholder='Enter your password' type="password" />
                </div>
                <div className='flex justify-end text-gray-400 py-2 mb-8'>
                    <p>Forgot Password?</p>
                </div>
                <button className='w-full my-5 py-2 bg-black
 shadow-lg shadow-0px 20px 32px rgba(2, 1, 0, 0.42 hover:border-purple-500 text-white font-semibold rounded-lg mb-12'>Log in</button>
                
            </form>
            <div className='flex justify-center'><p className='text-center'><span className='font-14 text-gray-700 mr-3'>Dont have a account yet?</span><span className='font-14 text-teal-500 '>Sign up</span></p></div>
            
        </div>
    </div>
  )
}
