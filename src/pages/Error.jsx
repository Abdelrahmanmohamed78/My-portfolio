import React from 'react'
import errorImg from "../assets/404 error.gif"
import { Link } from 'react-router'

export default function Error() {
  return (
    <main>
      <img loading='lazy' className='w-[400px] max-w-full mx-auto mb-4' src={errorImg} alt="error image" />
      <h3 className='text-center text-2xl sm:text-4xl font-bold mb-2'>Oops! Page Not Found</h3>
      <p className='text-xs sm:text-sm text-gray-400 w-[300px] max-w-full text-center mx-auto'>
        The page you are trying to access does not exist or has been moved.
        Try going back to our homepage.
      </p>
      <Link to={'/'} className='w-fit mx-auto mt-3 block py-2 px-5 rounded-md bg-[var(--main-color)] text-sm font-semibold'>Go To Home</Link>
    </main>
  )
}
