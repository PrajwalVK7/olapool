import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SubmenuContext } from '../context/contextShare'

function SidebarOptions({onMenuItemClick}) {


    const {setMenu,menu} = useContext(SubmenuContext);


    const handleSetMenu = (menu)=>{
        setMenu(menu);
        onMenuItemClick()
    }

console.log("menu",menu)
  return (
    <>
    <menu className='flex justify-center items-center flex-col'>
                    <button className='mt-3 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>Overview</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    
                    <button onClick={()=>handleSetMenu('store')} className='mt-3 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>Store</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button onClick={()=>handleSetMenu('user')}  className='mt-3 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>User Account</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button className='mt-3 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>Orders</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button className='mt-3 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>Contact & Support</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button className='mt-3 w-full flex justify-between items-center p-3  rounded hover:bg-cyan-500'>
                        <div className="flex items-center">
                            <i className="fa-solid fa-table"></i>
                            <span className='text-xl ml-2'>Terms & Condition</span>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                </menu>
    </>
  )
}

export default SidebarOptions