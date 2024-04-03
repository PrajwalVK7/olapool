import React, { useContext, useEffect, useState } from 'react';
import { SubmenuContext } from '../context/contextShare';

function FooterForMob() {
    const { menu } = useContext(SubmenuContext);
    const [menuStatus, setMenuStatus] = useState(false);

    useEffect(() => {
        setMenuStatus(menu);
    }, [menu]);

    return (
        <div className=''>
            {menuStatus ? (
                <div>
                    <ul className='flex justify-evenly text-xl text-blue-700'>
                        <li><i className="fa-solid fa-house"></i></li>
                        <li><i className="fa-solid fa-message"></i></li>
                        <li><i className="fa-solid fa-magnifying-glass"></i></li>
                        <li><i className="fa-solid fa-arrows-up-down"></i></li>
                        <li><i className="fa-regular fa-circle"></i></li>
                    </ul>
                </div>
            ) : (
                <div className='flex justify-center '>
                   <button className='btn btn-primary'>Logout</button>
                </div>
            )}
        </div>
    );
}

export default FooterForMob;
