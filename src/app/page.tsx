import Image from "next/image";
import Link from "next/link";

import { NEW_ARRIVALS, SHOES_LISTINGS } from '@/Constants/shoesData';

export default function Home() {

  return (
    <main className="flex bg-gray-200 flex-col">
      {/* Mweb */}
      {/* Header */}
      <div className="bg-black block lg:hidden flex items-center" >
        <div className="py-4 px-6" >
          <div className="flex flex-col items-center uppercase py-1 px-4 border-2 text-xs font-extrabold tracking-wide" >
            {/* Logo */}
            <p>The Kicks</p>
            <p>Store</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="block lg:hidden p-6" >
        <div className="bg-white flex flex-col relative p-6" >
          {/* Main Shoe */}
          <div className="text-black absolute " >
            <p className="text-4xl sm:text-6xl font-bold pt-20">
              {NEW_ARRIVALS[0]?.name}
            </p>
            <p className="text-gray-500 text-lg font-bold" >{NEW_ARRIVALS[0]?.colorOptions}</p>
          </div>
          <div className="h-full w-full" >
            <Image
              height={400}
              width={600}
              // fill
              src={NEW_ARRIVALS[0]?.imageLink}
              alt={NEW_ARRIVALS[0]?.name}
            />
          </div>
        </div>

        <div className="w-full mt-6">
          {/* other collections */}
          <p className="text-sm font-bold text-gray-400/40 uppercase mb-4" >New Arrivals</p>

          <div className="w-full flex items-center overflow-x-scroll" >

            <div className="min-w-80 flex items-center p-6 mr-10 bg-gray-100 shadow-lg" >
              <div className="flex-1" >
                <p className="text-black text-lg font-bold">
                  {NEW_ARRIVALS[1]?.name}
                </p>
                <p className="flex flex-col mt-4">
                  <span className="text-xs text-gray-400">From</span>
                  <span className="text-sm font-medium text-gray-400">
                    {NEW_ARRIVALS[1]?.price}
                  </span>
                </p>
              </div>
              <div className="flex-1 overflow-clip" >
                <div className="h-20 flex-1 relative left-6" >
                  <Image
                    // height={100}
                    // width={200}
                    fill
                    src={NEW_ARRIVALS[1]?.imageLink}
                    alt={NEW_ARRIVALS[1]?.name}
                    style={{
                      objectFit: 'cover', // cover, contain, none
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="min-w-80 flex items-center p-6 mr-10 bg-gray-100 shadow-lg" >
              <div className="flex-1" >
                <p className="text-black text-lg font-bold">
                  {NEW_ARRIVALS[2]?.name}
                </p>
                <p className="flex flex-col mt-4">
                  <span className="text-xs text-gray-400">From</span>
                  <span className="text-sm font-medium text-gray-400">
                    {NEW_ARRIVALS[2]?.price}
                  </span>
                </p>
              </div>
              <div className="flex-1 overflow-clip" >
                <div className="h-20 flex-1 relative left-6" >
                  <Image
                    // height={100}
                    // width={200}
                    fill
                    src={NEW_ARRIVALS[2]?.imageLink}
                    alt={NEW_ARRIVALS[2]?.name}
                    style={{
                      objectFit: 'cover', // cover, contain, none
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="min-w-80 flex items-center p-6 mr-10 bg-gray-100 shadow-lg" >
              <div className="flex-1" >
                <p className="text-black text-lg font-bold">
                  {NEW_ARRIVALS[3]?.name}
                </p>
                <p className="flex flex-col mt-4">
                  <span className="text-xs text-gray-400">From</span>
                  <span className="text-sm font-medium text-gray-400">
                    {NEW_ARRIVALS[1]?.price}
                  </span>
                </p>
              </div>
              <div className="flex-1 overflow-clip" >
                <div className="h-20 flex-1 relative left-6" >
                  <Image
                    // height={100}
                    // width={200}
                    fill
                    src={NEW_ARRIVALS[3]?.imageLink}
                    alt={NEW_ARRIVALS[3]?.name}
                    style={{
                      objectFit: 'cover', // cover, contain, none
                    }}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="w-full mt-6">
          {/* other collections */}
          <p className="text-sm font-bold text-gray-400/40 uppercase mb-4" >Popular</p>

          <div className="w-full flex items-center overflow-x-scroll" >

            {SHOES_LISTINGS.map((shoe) => <div className="min-w-80 min-h-44 flex items-center p-6 mr-10 bg-gray-100 shadow-lg" >
              <div className="flex-1" >
                <p className="text-black text-lg font-bold">
                  {shoe?.name}
                </p>
                <p className="flex flex-col mt-4">
                  <span className="text-sm font-medium text-gray-400">
                    {shoe?.price}
                  </span>
                </p>
              </div>
              <div className="flex-1 overflow-clip" >
                <div className="h-20 flex-1 relative left-6" >
                  <Image
                    // height={100}
                    // width={200}
                    fill
                    src={shoe?.imageLink || ''}
                    alt={shoe?.name || ''}
                    style={{
                      objectFit: 'cover', // cover, contain, none
                    }}
                  />
                </div>
              </div>
            </div>)}

          </div>

        </div>

      </div>

      {/* Dweb */}
      {/* Header */}
      <div className="hidden lg:block w-full p-8 bg-black flex items-center justify-between">
        <div className="flex items-center" >
          <div className="flex flex-col items-center uppercase mr-8 py-2 px-6 border-4 font-extrabold tracking-wide	" >
            {/* Logo */}
            <p>The Kicks</p>
            <p>Store</p>
          </div>
          <div className="flex items-center text-gray-100 uppercase font-medium " >
            {/* Menu Items */}
            <div className='group/menuList relative mx-2 p-4 text-sm hover:z-10' >
              <span className="cursor-pointer" >Collection</span>
              <div className="w-80 mt-4 absolute invisible group-hover/menuList:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-red-200 mt-2 p-4 cursor-pointer" >New Arrivals</li>
                  <li className="hover:bg-red-200 p-4 cursor-pointer" >Popular</li>
                  <li className="hover:bg-red-200 p-4 cursor-pointer" >Season end discounts</li>
                  <li className="hover:bg-red-200 mb-2 p-4 cursor-pointer" >Trendy Fashion</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 p-4 text-sm hover:z-10' >
              <span className="cursor-pointer" >Mens</span>
              <div className="w-80 mt-4 absolute invisible group-hover/menuList:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-red-200 mt-2 p-4 cursor-pointer" >Sports Shoes</li>
                  <li className="hover:bg-red-200 p-4 cursor-pointer" >Running Shoes</li>
                  <li className="hover:bg-red-200 p-4 cursor-pointer" >Everyday Shoes</li>
                  <li className="hover:bg-red-200 mb-2 p-4 cursor-pointer" >casual Shoes</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 p-4 text-sm hover:z-10' >
              <span className="cursor-pointer" >Womens</span>
              <div className="w-80 mt-4 absolute invisible group-hover/menuList:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-red-200 mt-2 p-4 cursor-pointer" >Sports Shoes</li>
                  <li className="hover:bg-red-200 p-4 cursor-pointer" >Running Shoes</li>
                  <li className="hover:bg-red-200 p-4 cursor-pointer" >Everyday Shoes</li>
                  <li className="hover:bg-red-200 mb-2 p-4 cursor-pointer" >casual Shoes</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 p-4 text-sm hover:z-10' >
              <span className="cursor-pointer" >Kids</span>
              <div className="w-80 mt-4 absolute invisible group-hover/menuList:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-red-200 mt-2 p-4 cursor-pointer" >Sports Shoes</li>
                  <li className="hover:bg-red-200 p-4 cursor-pointer" >Running Shoes</li>
                  <li className="hover:bg-red-200 p-4 cursor-pointer" >Everyday Shoes</li>
                  <li className="hover:bg-red-200 mb-2 p-4 cursor-pointer" >casual Shoes</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 p-4 text-sm hover:z-10' >
              <span className="cursor-pointer" >News</span>
              <div className="w-80 mt-4 absolute invisible group-hover/menuList:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-red-200 mt-2 p-4 cursor-pointer" >Latest News</li>
                  <li className="hover:bg-red-200 mb-2 p-4 cursor-pointer" >Coverage in Press</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-gray-300 uppercase font-light" >
          {/* Cart & Accounts */}
          <div className='group relative mx-2 p-4 text-sm hover:z-10' >
            <span className="cursor-pointer text-sm font-white mx-2 p-4" >Cart</span>
            <div className="w-60 min-h-80 mt-4 absolute invisible flex items-center justify-center group-hover:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
              <p className="font-medium" >No Item Added to cart</p>
            </div>
          </div>
          <div className='group relative mx-2 p-4 text-sm hover:z-10' >
            <span className="cursor-pointer text-sm font-white mx-2 p-4" >My Account</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="hidden lg:block p-8" >
        <div className=" h-4/5 flex overflow-clip bg-white p-4" >

          {/* Landing Section / Hero Section */}
          <div className="flex-[2_2_0] flex flex-col relative p-6" >
            {/* Main SHoe */}
            <div className="text-black absolute " >
              <p className="text-6xl font-bold pt-20">
                {NEW_ARRIVALS[0]?.name}
              </p>
              <p className="text-gray-500 text-lg font-bold" >{NEW_ARRIVALS[0]?.colorOptions}</p>
            </div>
            <div className="" >
              <Image
                height={400}
                width={900}
                src={NEW_ARRIVALS[0]?.imageLink}
                alt={NEW_ARRIVALS[0]?.name}
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            {/* other collections */}
            <p className="text-md font-bold text-gray-400/40 uppercase mb-4" >New Arrivals</p>

            <div className="flex p-4 shadow-xl" >
              <div className="flex-1" >
                <p className="text-black text-xl font-bold">
                  {NEW_ARRIVALS[1]?.name}
                </p>
                <p className="flex flex-col mt-4">
                  <span className="text-sm text-gray-400">From</span>
                  <span className="text-lg font-medium text-gray-400">
                    {NEW_ARRIVALS[1]?.price}
                  </span>
                </p>
              </div>
              <div className="flex-1 overflow-clip " >
                <div className="w-full relative left-6" >
                  <Image
                    height={200}
                    width={500}
                    src={NEW_ARRIVALS[1]?.imageLink}
                    alt={NEW_ARRIVALS[1]?.name}
                  />
                </div>
              </div>
            </div>

            <div className="flex p-4 mt-4 shadow-xl" >
              <div className="flex-1" >
                <p className="text-black text-xl font-bold">
                  {NEW_ARRIVALS[2]?.name}
                </p>
                <p className="flex flex-col mt-4">
                  <span className="text-sm text-gray-400">From</span>
                  <span className="text-lg font-medium text-gray-400">
                    {NEW_ARRIVALS[2]?.price}
                  </span>
                </p>
              </div>
              <div className="flex-1 overflow-clip " >
                <div className="w-full relative left-6" >
                  <Image
                    height={200}
                    width={500}
                    src={NEW_ARRIVALS[2]?.imageLink}
                    alt={NEW_ARRIVALS[2]?.name}
                  />
                </div>
              </div>
            </div>

            <div className="flex p-4 mt-4 shadow-xl" >
              <div className="flex-1" >
                <p className="text-black text-xl font-bold">
                  {NEW_ARRIVALS[3]?.name}
                </p>
                <p className="flex flex-col mt-4">
                  <span className="text-sm text-gray-400">From</span>
                  <span className="text-lg font-medium text-gray-400">
                    {NEW_ARRIVALS[3]?.price}
                  </span>
                </p>
              </div>
              <div className="flex-1 overflow-clip " >
                <div className="w-full relative left-6" >
                  <Image
                    height={200}
                    width={500}
                    src={NEW_ARRIVALS[3]?.imageLink}
                    alt={NEW_ARRIVALS[3]?.name}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="py-8" >
          {/* Other shoes with listing */}
          <p className="text-md font-bold text-gray-400/40 uppercase mb-4" >Popular</p>

          <div className="w-full flex flex-wrap bg-gray-100" >

            {SHOES_LISTINGS.map((shoe) =>
              <div className="w-1/4 flex flex-col items-center p-2 shadow-slate-200 shadow-sm hover:bg-gray-200/50 cursor-pointer" >
                <div>
                  <Image
                    height={250}
                    width={250}
                    src={shoe?.imageLink || ''}
                    alt={shoe?.name || ''}
                  />
                </div>
                <div className="flex-1 flex flex-col items-center" >
                  <p className="xtext-lg font-bold text-gray-600">
                    {shoe?.name}
                  </p>
                  <p className="flex flex-col">
                    <span className="text-sm font-bold text-gray-600">
                      {shoe?.price}
                    </span>
                  </p>
                </div>
              </div>)}

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full p-4 bg-black flex justify-center">
        <p>Made By Mayank Kathuria</p>
      </div>
    </main>
  );
}
