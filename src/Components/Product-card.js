/*
      require('@tailwindcss/aspect-ratio'),
*/

import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync } from '../Slices/ProductSlice';
import "../App.css";
import { addAsync } from '../Slices/CartSlice';
import { data } from '../App';

export default function ProductCard(props) {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(fetchAsync())
    }, [])

    const search = useContext(data);

    return (
        <div className="bg-white">
            {products.filter(
                (data) => {
                    return search.toLowerCase() === ''
                        ? data
                        : data.title.toLowerCase().includes(search) || data.brand.toLowerCase().includes(search) || data.category.toLowerCase().includes(search)  
                }
            ).map((feature) => (
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6  lg:max-w-7xl lg:grid-cols-2 lg:px-8" key={Math.random()}>
                    {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 mt-4"> */}
                    <div className="mt-4 setimgcenter">
                        <img
                            src={feature.image}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="rounded-lg bg-gray-100"
                            height='400px'
                            width='400px'
                        />
                    </div>
                    {/* /// */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{feature.title} (By {feature.brand})
                        </h2>
                        <div className='my-2'>
                            <span className='bg-lime-400 rounded-full px-2'>{feature.stock} in Stock</span>
                        </div>
                        <p className="mt-4 text-gray-500">
                            {feature.description}
                        </p>

                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

                            <div key={Math.random()} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-4xl my-2 text-gray-900">Price</dt>
                                <dd className="mt-2 text-2xl text-gray-500">$ {feature.price}</dd>
                            </div>
                            <div key={Math.random()} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-4xl my-2 text-gray-900">Brand</dt>
                                <dd className="mt-2 text-2xl text-gray-500">{feature.brand}</dd>
                            </div>
                            <div key={Math.random()} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium my-2 text-gray-900">category</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.category}</dd>
                            </div>
                            <div key={Math.random()} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium my-2 text-gray-900">Rating</dt>
                                <dd className="mt-2 text-sm text-gray-500">Rate By {feature.rating.count} Users - Rating {feature.rating.rate}</dd>
                            </div>

                            <div>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
                                    onClick={() => dispatch(addAsync(feature))}>
                                    Add To Cart
                                </button>
                                <button className="bg-amber-300 hover:bg-amber-400 text-gray-700 font-bold py-2 px-4 mx-2 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </dl>

                    </div>

                </div>
            ))}
        </div>
    )
}
