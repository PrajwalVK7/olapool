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
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            title: "Product 2",
            image: "https://via.placeholder.com/150",
        },
    ];
    const [show, setShow] = useState(false);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-0 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <div className="flex flex-wrap gap-6 justify-center">
                    <div className="w-full lg:w-1/4 hidden sm:block xs:block">
                        <AddProduct />
                    </div>
                    {products.map((item) => (
                        <div key={item.id} className="relative  sm:w-1/4 lg:w-1/4">
                            <img src={item.image} alt={item.title} className="w-full h-auto" />
                            <Dropdown className="absolute top-0 right-0 mt-2 hidden lg:block">
                                <Dropdown.Toggle variant="transparent"  style={{ borderColor: 'transparent' }}>
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
            <div className='hidden sm:block '>
                <div className='flex justify-center'>
                        <button>x</button>
                </div>
            </div>
        </div>
    );
}

export default ViewProduct;
