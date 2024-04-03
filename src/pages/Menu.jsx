import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ProfileIcon from '../components/ProfileIcon';
import './Menu.css'
import SidebarOptions from '../components/SidebarOptions';

function Menu({onMenuItemClick}) {
    return (
        <div className='py-1 flex flex-col gap-10 sm:flex sm:flex-col lg:flex-col sm:h-screen'>
            <div className='sm:rounded-md bg-white sm:bg-blue-400 p-3'>
                <ProfileIcon />
            </div>
            <div className='p-3 border-2 border-gray-400 rounded hidden lg:block '>
                <h2>Available For Use</h2>
                <h1>0.00</h1>
                <div className='flex justify-between mt-3'>
                    <h3>Beign Cleared</h3>
                    <button className='btn btn-outline-secondary text-black' style={{ width: '7rem' }}>Withdraw</button>
                </div>
                <div className='flex justify-between mt-3'>
                    <h3>0.00</h3>
                    <button className='btn btn-outline-secondary text-black' style={{ width: '7rem' }}>History</button>
                </div>
            </div>
            <div className='mt-1'>
                <SidebarOptions onMenuItemClick={onMenuItemClick} />
            </div>
        </div>
    );
}

export default Menu;
