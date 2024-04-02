import React from 'react';
import AddProduct from './AddProduct';

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
        {
            id: 3,
            title: "Product 3",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            title: "Product 4",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            title: "Product 5",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            title: "Product 6",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <div className="flex flex-wrap gap-6">
                    <div className="w-full lg:w-1/4 hidden sm:block xs:block ">
                        <AddProduct />
                    </div>
                    {
                        products && products.map((item) => (
                            < div className="w-full lg:w-1/5 group relative shadow-xl rounded-md" key={item.id}>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                                    <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                                </div>
                                <div className="mt-1 flex justify-between m-3">
                                    <div>
                                        <h3 className="text-sm text-gray-700">{item.title}</h3>
                                        <p className="text-sm font-medium text-gray-900">From 4585</p>
                                    </div>
                                </div>
                            </div>
                        ))

                    }


                </div>
            </div>
        </div >
    );
}

export default ViewProduct;
