import Image from "next/image";
import Link from "next/link";

import { NEW_ARRIVALS, SHOES_LISTINGS } from '@/Constants/shoesData';
import DeliveryIcon from '@/Icons/deliveryIcon';
import CustomerServiceIcon from '@/Icons/customerServiceIcon';
import SafeIcon from '@/Icons/safeIcon';
import FacebookIcon from '@/Icons/facebookIcon';
import InstagramIcon from '@/Icons/instagramIcon';
// import LinkedinIcon from '@/Icons/linkedInIcon';
import YoutubeIcon from '@/Icons/youtubeIcon';
import BlogIcon from '@/Icons/blogIcon';


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
      <div className="hidden z-10 lg:flex w-full sticky top-0 py-4 px-8 bg-white flex items-center justify-between">
        <div className="flex items-center" >
          <div className="flex flex-col items-center uppercase mr-8 px-4 border-4 border-black text-sm text-black font-extrabold tracking-wide	" >
            {/* Logo */}
            <p>The Kicks</p>
            <p>Store</p>
          </div>
          <div className="flex items-center text-black uppercase" >
            {/* Menu Items */}
            <div className='group/menuList relative mx-2 py-4 px-4 text-sm hover:z-10 hover:bg-neutral-100 rounded-2xl hover:bg-neutral-100 rounded-2xl' >
              <span className="cursor-pointer" >Collection</span>
              <div className="w-56 mt-4 absolute invisible group-hover/menuList:visible bg-neutral-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-neutral-100 mt-2 p-4 cursor-pointer" >New Arrivals</li>
                  <li className="hover:bg-neutral-100 p-4 cursor-pointer" >Popular</li>
                  <li className="hover:bg-neutral-100 p-4 cursor-pointer" >Season end discounts</li>
                  <li className="hover:bg-neutral-100 mb-2 p-4 cursor-pointer" >Trendy Fashion</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 py-4 px-4 text-sm hover:z-10 hover:bg-neutral-100 rounded-2xl' >
              <span className="cursor-pointer" >Mens</span>
              <div className="w-44 mt-4 absolute invisible group-hover/menuList:visible bg-neutral-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-neutral-100 mt-2 p-4 cursor-pointer" >Sports Shoes</li>
                  <li className="hover:bg-neutral-100 p-4 cursor-pointer" >Running Shoes</li>
                  <li className="hover:bg-neutral-100 p-4 cursor-pointer" >Everyday Shoes</li>
                  <li className="hover:bg-neutral-100 mb-2 p-4 cursor-pointer" >casual Shoes</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 py-4 px-4 text-sm hover:z-10 hover:bg-neutral-100 rounded-2xl' >
              <span className="cursor-pointer" >Womens</span>
              <div className="w-44 mt-4 absolute invisible group-hover/menuList:visible bg-neutral-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-neutral-100 mt-2 p-4 cursor-pointer" >Sports Shoes</li>
                  <li className="hover:bg-neutral-100 p-4 cursor-pointer" >Running Shoes</li>
                  <li className="hover:bg-neutral-100 p-4 cursor-pointer" >Everyday Shoes</li>
                  <li className="hover:bg-neutral-100 mb-2 p-4 cursor-pointer" >casual Shoes</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 py-4 px-4 text-sm hover:z-10 hover:bg-neutral-100 rounded-2xl' >
              <span className="cursor-pointer" >Kids</span>
              <div className="w-44 mt-4 absolute invisible group-hover/menuList:visible bg-neutral-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-neutral-100 mt-2 p-4 cursor-pointer" >Sports Shoes</li>
                  <li className="hover:bg-neutral-100 p-4 cursor-pointer" >Running Shoes</li>
                  <li className="hover:bg-neutral-100 p-4 cursor-pointer" >Everyday Shoes</li>
                  <li className="hover:bg-neutral-100 mb-2 p-4 cursor-pointer" >casual Shoes</li>
                </ul>
              </div>
            </div>
            <div className='group/menuList relative mx-2 py-4 px-4 text-sm hover:z-10 hover:bg-neutral-100 rounded-2xl' >
              <span className="cursor-pointer" >News</span>
              <div className="w-44 mt-4 absolute invisible group-hover/menuList:visible bg-neutral-100 text-black shadow-lg border-0 rounded-lg" >
                <ul className="capitalize" >
                  <li className="hover:bg-neutral-100 mt-2 p-4 cursor-pointer" >Latest News</li>
                  <li className="hover:bg-neutral-100 mb-2 p-4 cursor-pointer" >Coverage in Press</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-black uppercase" >
          {/* Cart & Accounts */}
          <div className='group relative mx-2 p-2 px-4 left-6 text-sm hover:z-10 hover:bg-neutral-100 rounded-2xl' >
            <span className="cursor-pointer text-sm font-white mx-2 p-4" >Cart</span>
            <div className="w-60 min-h-80 mt-4 absolute invisible flex items-center justify-center group-hover:visible bg-neutral-100 text-black shadow-lg border-0 rounded-lg" >
              <p className="" >No Item Added to cart</p>
            </div>
          </div>
          <div className='group relative mx-2 p-2 px-4 left-6 text-sm hover:z-10 hover:bg-neutral-100 rounded-2xl' >
            <span className="cursor-pointer text-sm font-white mx-2 p-4" >My Account</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="hidden lg:block py-8" >

        {/* Landing Section / Hero Section */}
        <section className="max-h-screen flex flex-col overflow-clip bg-white bg-hero-img bg-cover bg-center" >
          {/* Main SHoe */}
          <div className="flex w-full p-8 text-white" >
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
              <p className="text-sm text-white uppercase" >{`What's Trending`}</p>
            </div>
          </div>

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
          <div className="h-[600px] w-[400px] relative mr-8 -translate-y-20 bg-woman-shoes-img bg-center bg-no-repeat bg-cover" >
            <div className="absolute bottom-8 p-8">
              <p className="uppercase text-2xl mb-4" >Famous Muiches</p>
              <div className="flex container" >
                <p className="p-4 border border-white rounded-lg cursor-pointer hover:bg-white hover:text-black" >
                  SHOP NOW
                </p>
              </div>
            </div>
          </div>
          <div className="h-[600px] w-[400px] relative mr-8 translate-y-20 bg-nike-dunk-img bg-center bg-no-repeat bg-cover" >
            <div className="absolute bottom-8 p-8">
              <p className="uppercase text-2xl mb-4" >Special Collection</p>
              <div className="flex container" >
                <p className="p-4 border border-white rounded-lg cursor-pointer hover:bg-white hover:text-black" >
                  SHOP NOW
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 p-4" >
          {/* Best Selling collection */}
          <div className="flex justify-between items-center text-black ml-2" >
            {/* <p className="uppercase text-4xl text-white font-light drop-shadow-[-2.5px_0.5px_1.0px_rgba(0,0,0,1)]" >Best <span className="text-black drop-shadow-none">Sell</span>ing</p> */}
            <p className="px-4 py-2 bg-black uppercase text-4xl text-white font-semibold rounded-lg" >Best Selling</p>
            <div className="flex items-center">
              <p className="py-2 px-8 mr-2 cursor-pointer underline underline-offset-8 rounded-2xl hover:bg-neutral-100">PREV</p>
              <p className="py-2 px-8 mr-2 cursor-pointer underline underline-offset-8 rounded-2xl hover:bg-neutral-100">NEXT</p>
            </div>
          </div>

          <div className="w-full flex my-16 py-8 overflow-x-auto" >

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
          <div className="w-full flex justify-center items-center text-white" >
            <p className="p-4 rounded-lg cursor-pointer bg-black hover:bg-neutral-800" >
              SHOP NOW
            </p>
          </div>
        </section>

        <section className="py-8 mb-8" >
          {/* Picture of categories available */}
          <div className="text-black" >
            <div className="flex p-2 mb-2" >
              <div className="min-h-[500px] flex flex-1 justify-center bg-nike-kids-img bg-center bg-no-repeat bg-container" >
                <div className="w-full flex justify-center items-end text-white mb-16" >
                  <p className="p-4 rounded-lg cursor-pointer bg-black hover:bg-neutral-800" >
                    KIDS
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-2 mb-2" >
              <div className="min-h-[500px] flex justify-center flex-[3_0_0] bg-nike-running-img bg-bottom bg-no-repeat bg-cover" >
                <div className="w-full flex justify-center items-end text-white mb-16" >
                  <p className="p-4 rounded-lg cursor-pointer bg-black hover:bg-neutral-800" >
                    RUNNING
                  </p>
                </div>
              </div>
              <div className="min-h-[500px] flex justify-center flex-[2_0_0] ml-4 bg-nike-woman-img bg-bottom bg-no-repeat bg-cover" >
                <div className="w-full flex justify-center items-end text-white mb-16" >
                  <p className="p-4 rounded-lg cursor-pointer bg-black hover:bg-neutral-800" >
                    WOMAN
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-2 mb-2" >
              <div className="min-h-[500px] flex justify-center flex-[2_0_0] bg-nike-men-img bg-center bg-no-repeat bg-cover" >
                <div className="w-full flex justify-center items-end text-white mb-16" >
                  <p className="p-4 rounded-lg cursor-pointer bg-black hover:bg-neutral-800" >
                    MAN
                  </p>
                </div>
              </div>
              <div className="min-h-[500px] flex justify-center flex-[3_0_0] ml-4 bg-nike-football-img bg-bottom bg-no-repeat bg-cover" >
                <div className="w-full flex justify-center items-end text-white mb-16" >
                  <p className="p-4 rounded-lg cursor-pointer bg-black hover:bg-neutral-800" >
                    FOOTBALL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* Picture of service promise */}
          <div className="p-8 flex justify-evenly">
            <div className="min-h-60 flex flex-col justify-center p-4" >
              <div className="flex justify-center mb-8">
                <DeliveryIcon width="60px" height="60px" />
              </div>
              <div className="">
                <p className="text-xl text-black uppercase">FREE AND FAST DELIVERY</p>
                <p className="text-sm text-black text-center">Free delivery for all order above 500</p>
              </div>
            </div>
            <div className="min-h-60 flex flex-col justify-center p-4" >
              <div className="flex justify-center mb-10">
                <CustomerServiceIcon width="50px" height="50px" />
              </div>
              <div className="">
                <p className="text-xl text-black uppercase">24/7 CUSTOMER SERVICE</p>
                <p className="text-sm text-black text-center">Friendly 24/7 customer support</p>
              </div>
            </div>
            <div className="min-h-60 flex flex-col justify-center p-4" >
              <div className="flex justify-center mb-8">
                <SafeIcon width="60px" height="60px" />
              </div>
              <div className="">
                <p className="text-xl text-black uppercase">MONEY BACK GAURANTEE</p>
                <p className="text-sm text-black text-center">We return money within 30 days</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="w-full p-4 bg-stone-800">
        <div className="flex p-2 mb-4" >
          <div className="flex flex-col flex-[2_0_0]">
            <div className="flex">
              <div className="flex flex-col items-center uppercase border-2 text-xs text-white font-extrabold tracking-wide py-1 px-4 mb-4" >
                {/* Logo */}
                <p>The Kicks</p>
                <p>Store</p>
              </div>
            </div>
            <div className="text-sm mb-4" >
              <p>Address</p>
              <p>Kicks store, central delhi, new delhi - 110000</p>
            </div>
            <div className="text-sm mb-4" >
              <p>Contact</p>
              <p>1800 1200 0000</p>
              <p>sales@kicksstore.com</p>
            </div>
            <div className="flex">
              <div className="flex justify-between items-center">
                <Link className="mr-4 hover:bg-slate-400 border-xl p-2" href={'/'}><FacebookIcon color="#fff" height="20px" width="20px" /></Link>
                <Link className="mr-4 hover:bg-slate-400 border-xl p-2" href={'/'}><InstagramIcon color="#fff" height="20px" width="20px" /></Link>
                {/* <Link className="mr-4 hover:bg-slate-400 border-xl fill-white p-2" href={'https://www.linkedin.com/in/dev-mayank-kathuria/'}><LinkedinIcon color="#fff" height="30px" width="30px" /></Link> */}
                <Link className="mr-4 hover:bg-slate-400 border-xl p-2" href={'/'}><YoutubeIcon color="#fff" height="20px" width="20px" /></Link>
                <Link className="mr-4 hover:bg-slate-400 border-xl p-2" href={'https://mayankkathuria.com/blog'}><BlogIcon color="#fff" height="20px" width="20px" /></Link>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-between text-sm">
            <div className="flex flex-col">
              <Link href={'/'} className="mb-8" >{`Men's shoes`}</Link>
              <Link href={'/'} className="mb-8" >{`Men's running shoes`}</Link>
              <Link href={'/'} className="mb-8" >{`Men's basketball shoes`}</Link>
              <Link href={'/'} className="mb-8" >{`Men's walking shoes`}</Link>
            </div>
            <div className="flex flex-col">
              <Link href={'/'} className="mb-8" >{`Women's shoes`}</Link>
              <Link href={'/'} className="mb-8" >{`Women's running shoes`}</Link>
              <Link href={'/'} className="mb-8" >{`Women's basketball shoes`}</Link>
              <Link href={'/'} className="mb-8" >{`Women's walking shoes`}</Link>
            </div>
            <div className="flex flex-col">
              <Link href={'/'} className="mb-8" >{`Kids's shoes`}</Link>
              <Link href={'/'} className="mb-8" >{`Kids's running shoes`}</Link>
              <Link href={'/'} className="mb-8" >{`Kids's basketball shoes`}</Link>
              <Link href={'/'} className="mb-8" >{`Kids's walking shoes`}</Link>
            </div>
          </div>
        </div>
        <p className="p-6 text-center border-t border-white">Made By Mayank Kathuria</p>
      </div>
    </main>
  );
}
