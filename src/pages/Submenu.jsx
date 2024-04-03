import React, { useContext } from 'react';
import { ActiveComponent, SubmenuContext, SubmenuStatusContext} from '../context/contextShare';
import Products from './Products';

function Submenu() {
    const { menu, setMenu } = useContext(SubmenuContext);
    const { component, setComponent } = useContext(ActiveComponent);
    const { submenuStatus, setSubMenuStatus } = useContext(SubmenuStatusContext)
    const submenus = {
        'store': [
            { submenu: "products", component: <Products /> },
            { submenu: "orders" },
            { submenu: "store setting" }
        ],
        'user': [
            { submenu: "profile" },
            { submenu: "edit" },
            { submenu: "setting" }
        ]
    };

    const submenuItems = submenus[menu];

    const handleSubmenuClick = (component) => {
        setComponent(component);
        setSubMenuStatus(true)
    };

    return (
        <div className='sm:h-screen h-screen sm:py-50'>
            {submenuItems &&
                <div className='sm:mt-20'>
                    <ul>
                        {submenuItems.map((item, index) => (
                            <li className='mb-3 mt-3' key={index}>
                                <button className='sm:border hover:bg-blue-500 sm:border-b-slate-300 sm:rounded-md  sm:shadow-md sm:bg-slate-300 borde-1 w-full' onClick={() => handleSubmenuClick(item.component)}>
                                    {item.submenu}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
}

export default Submenu;
