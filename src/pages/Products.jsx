import React from 'react'
import AddProduct from '../components/AddProduct'
import ViewProduct from '../components/ViewProduct'

function Products() {
    return (
        <>
            <div>
                <div className='flex justify-end'>
                    <div className='me-10 w-full flex justify-end'>
                        <input className='border-1 rounded-s-md rounded-e-none border-gray-400 w-72 h-10 text-lg text-start ps-4 text-black' type="text" placeholder='Srearch Product' />
                        <button className=' bg-blue-600 rounded-e-lg  w-12 h-10'></button>
                    </div>
                    <button className='me-10 rounded-lg bg-blue-600 w-1/6 text-white'>
                        <span><i class="fa-solid fa-sort ms-2 me-3"></i></span>
                        Sort
                        <span> <i className="fa-solid fa-angle-down  me-3"></i>
                        </span>
                    </button>

                </div>
                <div className='bg-white rounded-sm'>
                    <ViewProduct />
                </div>
            </div>
        </>
    )
}

export default Products