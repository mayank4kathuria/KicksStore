import Image from "next/image";
import Link from "next/link";

import { NEW_ARRIVALS, SHOES_LISTINGS } from '@/Constants/shoesData';

export default function Home() {

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col">
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
        <div className="min-h-screen flex" >
          {/* Landing Section / Hero Section */}
          <div className="flex-[2_2_0] flex flex-col p-6" >
            {/* Main SHoe */}
            <div className="text-black relative top-40" >
              <p className="text-4xl">
                <strong>
                  {NEW_ARRIVALS[0]?.name}
                </strong>
              </p>
              <p className="text-gray-500 text-lg font-bold" >{NEW_ARRIVALS[0]?.colorOptions}</p>
            </div>
            <div className="" >
              <Image 
                height={300}
                width={800}
                src={NEW_ARRIVALS[0]?.imageLink}
                alt={NEW_ARRIVALS[0]?.name}
              />
            </div>
          </div>
          <div className="flex-1 bg-amber-700">
            {/* other collections */}
          </div>
        </div>
        <div>
          {/* Other shoes with listing */}
        </div>
      </div>

      {/* Footer */}
    </main>
  );
}
