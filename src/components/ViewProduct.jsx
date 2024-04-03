import AddProduct from './AddProduct';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Dropdown from 'react-bootstrap/Dropdown';

function ViewProduct() {
    const products = [
        {
            id: 1,
            title: "Product 1",
            image: "https://jasystore.com/wp-content/uploads/2021/12/apple-iphone-15-1-500x500.jpg",
        },
        {
            id: 2,
            title: "Product 2",
            image: "https://jasystore.com/wp-content/uploads/2021/12/apple-iphone-15-1-500x500.jpg",
        },
    ];
    const [show, setShow] = useState(false);
    

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-0 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <div className="flex flex-wrap gap-6 justify-center lg:grid-cols-4 sm:grid-cols-2">
                    <div className="w-full lg:w-1/4 hidden sm:block xs:block lg:col-span-1">
                        <AddProduct />
                    </div>
                    {products.map((item) => (
                        <div key={item.id} className="relative col-span-1  sm:w-1/4 lg:w-1/4">
                            <img src={item.image} alt={item.title} className="w-full h-auto" />
                            <Dropdown className="absolute top-0 right-0 mt-2 hidden lg:block">
                                <Dropdown.Toggle variant="transparent" style={{ borderColor: 'transparent' }}>
                                    <i className="fa-solid fa-ellipsis-vertical text-white"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="mt-1 flex justify-between m-3">
                                <div>
                                    <h3 className="text-sm text-gray-700">{item.title}</h3>
                                    <p className="text-sm font-medium text-gray-900">From 4585</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden md:block fixed right-52 '>
                {show&&
                    <ul className='flex justify-end flex-col '>
                    <li><button onClick={()=>setShow(false)} className='btn btn-primary rounded-md mb-3'>New order</button></li>
                    <li><button className='btn btn-primary rounded-md mb-3'>Add product</button></li>
                </ul>
                }
                <div className='flex justify-center'>

                    <button onClick={()=>setShow(true)} onDoubleClick={()=>setShow(false)} className='btn btn-primary rounded-lg'><i class="fa-solid fa-x"></i></button>
                </div>
            </div>
        </div>
    );
}

export default ViewProduct;
