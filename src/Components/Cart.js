import { useSelector, useDispatch } from 'react-redux';

import { fatchAsync, deleteAsync } from '../Slices/CartSlice';
import { useEffect } from 'react';
import EmptyCart from './EmptyCart';
import '../App.css';
// import { addItems } from '../API/CartAPI';

export default function Cart() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fatchAsync())
  },[])

  // <button onClick={()=>dispatch(deleteAsync(Addeditem.id))}>Delete</button> // li or button
  return (
    <div className="mx-24">
      {
        items.length > 0 ? <ul role="list" className="... divide-y divide-gray-100">
          {items.map((Addeditem) => (
            <div key={Math.random()} className="lis">
              <li onClick={()=>dispatch(deleteAsync(Addeditem.id))} className="flex justify-between gap-x-6 py-5 removel">
                <div className="flex min-w-0 gap-x-4">
                  <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={Addeditem.image} alt="" />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{Addeditem.title}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Brand : {Addeditem.brand}</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">$ {Addeditem.price}</p>
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Top Seller</p>
                  </div>
                </div>
              </li>
              {/* <button onClick={() => dispatch(deleteAsync(Addeditem.id))} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Remove
              </button> */}
            </div>
          ))}
        </ul> : <EmptyCart />
      }
    </div>
  )
}
