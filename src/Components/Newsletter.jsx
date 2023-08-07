import React from 'react'

function Newsletter() {
    return (
        <div className='py-16 bg-blue-800/70'>
            <h1 className='lg:text-4xl md:text-3xl py-6 sm:text-2xl  text-white text-center'>Subscribe To Newsletter</h1>
            <form className='flex lg:py-1 md:py-1 sm:py-1 bg-white lg:mx-[30%] md:mx-[15%] sm:mx-[5%] rounded-full px-4 outline-none'><input type="email" required placeholder='Example@gmail.com' className='py-2 outline-none lg:px-10 sm:px-2 md:px-2 w-4/5' /> <button type='submit' className='text-white py-3 lg:px-8 md:px-8 sm:px-5 bg-blue-800/70 hover:bg-blue-700 mx-3 lg:text-sm font-semibold uppercase md:text-xl sm:text-sm contentOne tracking-widest rounded-xl cursor-pointer'>Subscribe</button></form>
        </div>
    )
}

export default Newsletter