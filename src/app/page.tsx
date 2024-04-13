import Image from "next/image";
import Link from "next/link";

import { NEW_ARRIVALS, SHOES_LISTINGS } from '@/Constants/shoesData';

export default function Home() {

  return (
    <main className="flex bg-gray-100 flex-col">
      {/* Header */}
      <div className="w-full p-8 bg-black flex items-center justify-between">
        <div className="flex items-center" >
          <div className="mr-8" >
            {/* Logo */}
            <span>LOGO</span>
          </div>
          <div className="text-gray-100 uppercase font-medium " >
            {/* Menu Items */}
            <Link href='/' className='mx-2 p-4 text-sm' >Collections</Link>
            <Link href='/' className='mx-2 p-4 text-sm' >Mens</Link>
            <Link href='/' className='mx-2 p-4 text-sm' >Womens</Link>
            <Link href='/' className='mx-2 p-4 text-sm' >Kids</Link>
            <Link href='/' className='mx-2 p-4 text-sm' >News</Link>
          </div>
        </div>
        <div className="text-gray-300 uppercase font-light" >
          {/* Cart & Accounts */}
          <span className="text-sm font-white mx-2 p-4" >Cart</span>
          <span className="text-sm font-white mx-2 p-4 " >My Account</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8" >
        <div className=" h-4/5 flex overflow-clip" >

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

          <div className="flex-1 flex flex-col ">
            {/* other collections */}
            <p className="text-md font-bold text-gray-400/40 uppercase mb-4" >New Arrivals</p>

            <div className="flex py-4" >
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

            <div className="flex p-4" >
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

            <div className="flex p-4" >
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
    </main>
  );
}
