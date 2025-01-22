import Image from "next/image";
import Link from "next/link";

import { NEW_ARRIVALS, SHOES_LISTINGS } from '@/Constants/shoesData';

export default function Home() {

  return (
    <main className=" min-h-screen flex bg-white flex-col justify-between">
      {/* ----------------------------Mweb---------------------------- */}
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
      <div className="flex flex-col lg:hidden p-6" >
        <div className="bg-neutral-100 flex flex-col items-center relative p-6" >
          {/* Main Shoe */}
          <div className="text-black absolute " >
            <p className="text-4xl sm:text-6xl font-bold pt-20">
              {NEW_ARRIVALS[0]?.name}
            </p>
            <p className="text-gray-500 text-lg font-bold" >{NEW_ARRIVALS[0]?.colorOptions}</p>
          </div>
          <div className="h-full w-full flex justify-center" >
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
          <p className="text-sm font-bold text-gray-400 uppercase mb-4" >New Arrivals</p>

          <div className="w-full flex items-center overflow-x-scroll no-scrollbar" >

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
          <p className="text-sm font-bold text-gray-400 uppercase mb-4" >Popular</p>

          <div className="w-full flex items-center overflow-x-scroll no-scrollbar" >

            {SHOES_LISTINGS.map((shoe, index) => <div key={`${index}-${shoe?.name}`} className="min-w-80 min-h-44 flex items-center p-6 mr-10 bg-gray-100 shadow-lg" >
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

      {/*----------------------------Dweb----------------------------*/}
      {/* Header */}
      <div className="hidden lg:flex w-full py-4 px-8 bg-white flex items-center justify-between border-slate-300 border-b ">
        <div className="flex items-center" >
          <div className="flex flex-col items-center uppercase mr-8 px-4 border-4 border-black text-sm text-black font-extrabold tracking-wide	" >
            {/* Logo */}
            <p>The Kicks</p>
            <p>Store</p>
          </div>
          <div className="flex items-center text-black uppercase font-semibold " >
            {/* Menu Items */}
            <div className='group/menuList relative mx-2 py-2 px-4 text-sm hover:z-10' >
              <span className="cursor-pointer" >Collection</span>
              <div className="w-56 mt-4 absolute invisible group-hover/menuList:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-slate-200 mt-2 p-4 cursor-pointer" >New Arrivals</li>
                  <li className="hover:bg-slate-200 p-4 cursor-pointer" >Popular</li>
                  <li className="hover:bg-slate-200 p-4 cursor-pointer" >Season end discounts</li>
                  <li className="hover:bg-slate-200 mb-2 p-4 cursor-pointer" >Trendy Fashion</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 py-2 px-4 text-sm hover:z-10' >
              <span className="cursor-pointer" >Mens</span>
              <div className="w-44 mt-4 absolute invisible group-hover/menuList:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-slate-200 mt-2 p-4 cursor-pointer" >Sports Shoes</li>
                  <li className="hover:bg-slate-200 p-4 cursor-pointer" >Running Shoes</li>
                  <li className="hover:bg-slate-200 p-4 cursor-pointer" >Everyday Shoes</li>
                  <li className="hover:bg-slate-200 mb-2 p-4 cursor-pointer" >casual Shoes</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 py-2 px-4 text-sm hover:z-10' >
              <span className="cursor-pointer" >Womens</span>
              <div className="w-44 mt-4 absolute invisible group-hover/menuList:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-slate-200 mt-2 p-4 cursor-pointer" >Sports Shoes</li>
                  <li className="hover:bg-slate-200 p-4 cursor-pointer" >Running Shoes</li>
                  <li className="hover:bg-slate-200 p-4 cursor-pointer" >Everyday Shoes</li>
                  <li className="hover:bg-slate-200 mb-2 p-4 cursor-pointer" >casual Shoes</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 py-2 px-4 text-sm hover:z-10' >
              <span className="cursor-pointer" >Kids</span>
              <div className="w-44 mt-4 absolute invisible group-hover/menuList:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-slate-200 mt-2 p-4 cursor-pointer" >Sports Shoes</li>
                  <li className="hover:bg-slate-200 p-4 cursor-pointer" >Running Shoes</li>
                  <li className="hover:bg-slate-200 p-4 cursor-pointer" >Everyday Shoes</li>
                  <li className="hover:bg-slate-200 mb-2 p-4 cursor-pointer" >casual Shoes</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 py-2 px-4 text-sm hover:z-10' >
              <span className="cursor-pointer" >News</span>
              <div className="w-44 mt-4 absolute invisible group-hover/menuList:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-slate-200 mt-2 p-4 cursor-pointer" >Latest News</li>
                  <li className="hover:bg-slate-200 mb-2 p-4 cursor-pointer" >Coverage in Press</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-black uppercase font-semibold" >
          {/* Cart & Accounts */}
          <div className='group relative mx-2 p-4 left-6 text-sm hover:z-10' >
            <span className="cursor-pointer text-sm font-white mx-2 p-4" >Cart</span>
            <div className="w-60 min-h-80 mt-4 absolute invisible flex items-center justify-center group-hover:visible bg-slate-100 text-black shadow-lg border-0 rounded-lg" >
              <p className="font-medium" >No Item Added to cart</p>
            </div>
          </div>
          <div className='group relative mx-2 p-4 left-6 text-sm hover:z-10' >
            <span className="cursor-pointer text-sm font-white mx-2 p-4" >My Account</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="hidden lg:block p-8" >

        {/* Landing Section / Hero Section */}
        <section className="max-h-screen flex flex-col overflow-clip bg-white bg-hero-img bg-cover bg-center" >
          {/* Main SHoe */}
          <div className="flex z-10 w-full p-8 text-white" >
            <div className="w-full flex flex-col text-9xl font-bold">
              <p className="text-9xl font-semibold" >Nike</p>
              <p className="flex justify-evenly text-[20.0rem] text-center font-bold pt-6 opacity-60" >
                <span>
                  Air
                </span>
                <span>
                  Max
                </span>
              </p>
              <p className="text-9xl font-semibold pt-6 self-end" >Collection</p>
            </div>
          </div>

        </section>

        <section className="py-16" >
          <div className="flex ml-6 mb-10" >
            <div className="min-w-44 flex self-center px-6 py-2 bg-indigo-950 border-4 border-indigo-900 rounded-full hover:bg-indigo-900" >
              <p className="text-sm text-white uppercase" >New Arrivals</p>
            </div>
            <div className="min-w-44 flex self-end px-6 py-2 ml-8 bg-yellow-950 border-4 border-yellow-900 rounded-full hover:bg-yellow-900" >
              <p className="text-sm text-white uppercase" >What's Trending</p>
            </div>
          </div>

          {/* Other shoes with listing */}
          {/* <p className="text-md font-bold text-gray-400 uppercase mb-4" >Popular</p> */}

          <div className="w-full flex flex-wrap pb-16 border-0 border-b border-slate-400" >

            {SHOES_LISTINGS.slice(0, 11).map((shoe, index) =>
              <div key={`${index}-${shoe?.name}`} className="w-80 flex flex-col mx-6 mb-16 shadow-slate-200 shadow-sm hover:shadow-lg cursor-pointer" >
                <div className="w-full flex justify-center bg-neutral-100 rounded-t-lg " >
                  <Image
                    height={250}
                    width={250}
                    src={shoe?.imageLink || ''}
                    alt={shoe?.name || ''}
                  />
                </div>
                <div className="flex-1 flex flex-col p-4 mte-2" >
                  <p className="text-md font-bold text-black">
                    {shoe?.name}
                  </p>
                  <p className="flex flex-col my-2">
                    <span className="text-sm text-black">
                      {shoe?.price}
                    </span>
                  </p>
                  <p className="flex flex-col">
                    <span className="text-sm text-black">
                      Stars
                    </span>
                  </p>
                </div>
              </div>)}

          </div>
        </section>

        <section className="py-36 mb-16 flex justify-center items-center" >
          {/* Picture of 2 shoes */}
          <div className="h-[600px] w-[400px] relative bg-yellow-300 mr-8 -translate-y-20" >
            <div className="absolute bottom-8 p-8">
              <p className="uppercase text-2xl mb-4" >Famous Muiches</p>
              <div className="flex container" >
                <p className="p-2 border border-white rounded-lg cursor-pointer hover:bg-white hover:text-black" >
                  SHOP NOW
                </p>
              </div>
            </div>
          </div>
          <div className="h-[600px] w-[400px] relative bg-sky-300 mr-8 translate-y-20" >
            <div className="absolute bottom-8 p-8">
              <p className="uppercase text-2xl mb-4" >Special Collection</p>
              <div className="flex container" >
                <p className="p-2 border border-white rounded-lg cursor-pointer hover:bg-white hover:text-black" >
                  SHOP NOW
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 p-4" >
          {/* Best Selling collection */}
          <div className="flex justify-between items-center text-black ml-2" >
            <p className="uppercase text-4xl text-white font-light drop-shadow-[-2.5px_0.5px_1.0px_rgba(0,0,0,1)]" >Best <span className="text-black drop-shadow-none">Sell</span>ing</p>
            <div className="flex items-center">
              <p className="py-2 px-4 mr-2 cursor-pointer hover:bg-neutral-400">PREV</p>
              <p className="py-2 px-4 mr-2 cursor-pointer hover:bg-neutral-400">NEXT</p>
            </div>
          </div>

          <div className="w-full flex my-8 py-8 overflow-x-auto" >

            {SHOES_LISTINGS.slice(0, 11).map((shoe, index) =>
              <div key={`${index}-${shoe?.name}`} className="min-w-80 flex flex-col mr-16 shadow-slate-200 shadow-sm hover:shadow-lg cursor-pointer" >
                <div className="w-full flex justify-center bg-neutral-100 rounded-t-lg " >
                  <Image
                    height={250}
                    width={250}
                    src={shoe?.imageLink || ''}
                    alt={shoe?.name || ''}
                  />
                </div>
                <div className="flex-1 flex flex-col p-4 mte-2" >
                  <p className="text-md font-bold text-black">
                    {shoe?.name}
                  </p>
                  <p className="flex flex-col my-2">
                    <span className="text-sm text-black">
                      {shoe?.price}
                    </span>
                  </p>
                  <p className="flex flex-col">
                    <span className="text-sm text-black">
                      Stars
                    </span>
                  </p>
                </div>
              </div>)}

          </div>

        </section>

        <section className="py-8" >
          {/* Picture of categories available */}
          <div className="text-black bg-red-200" >Will be available soon</div>
        </section>

        <section>
          {/* Picture of service promise */}
        </section>

      </div>

      {/* Footer */}
      <div className="w-full p-4 bg-stone-800 flex justify-center items-center`">
        <p>Made By Mayank Kathuria</p>
      </div>
    </main>
  );
}
