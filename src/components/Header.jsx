import React from 'react';

function Header() {
    return (
        <>
            <nav className='bg-gray-200 py-1'>
                <div className='container mx-auto px-4 lg:px-0 flex justify-between items-center'>
                <h1 class="text-3xl bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Olapool</h1>
                    <div className='flex space-x-4 border-2 border-b-slate-200'>
                        <button className="px-3 py-1 ">Message</button>
                        <div className='px-3 py-1 border-2 border-gray-500 bottom-0 rounded p-2 flex justify-between'>
                            <h3>Mayan</h3>
                            <div className='flex items-center justify-center ms-5'>
                                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" width={"20px"} alt="" />
                                <span><i className="fa-solid fa-angle-down ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
