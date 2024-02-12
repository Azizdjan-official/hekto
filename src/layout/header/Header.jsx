import React from 'react'
import MessageIcon from './../../icons/MessageIcon';
import Iconphone from './../../icons/Iconphone';
import Korzinka from './../../icons/Korzinka';
import Hektologo from './../../icons/Hektologo';
import { Link } from 'react-router-dom';
import Searchicon from './../../icons/Searchicon';

const Header = () => {
  return (
    <header className='flex flex-col'>
      <div className='bg-[#7E33E0] py-2'>
      <header className='w-[80%] mx-auto flex justify-between'>
        <nav className='flex gap-3'>
          <span className='flex items-center gap-3'>
            <MessageIcon/>
            <p className='text-[#F1F1F1] font-[600] text-sm'>mhhasanul@gmail.com</p>
          </span>
          <span className='flex items-center gap-3'>
            <Iconphone/>
            <p className='text-[#F1F1F1] font-[600] text-sm'>(12345)67890</p>
          </span>
        </nav>
        <nav className='flex gap-3 text-[#F1F1F1]'>
          <select className='bg-transparent	text-[#F1F1F1]' >
            <option value="english">English</option>
            <option value="russian">Russian</option>
          </select>
          <select className='bg-transparent	text-[#F1F1F1]' >
            <option value="usd">USD</option>
            <option value="sum">SUM</option>
          </select>
          <button>Login</button>
          <button>Wishlist</button>
          <Korzinka/>

        </nav>
      </header>
    </div>
    <nav className='py-4'>
      <div className='w-[80%] mx-auto flex justify-between'>
        <div className='flex items-center gap-20'>
          <Hektologo/>
          <div className='flex gap-3 font-[400] text-lg'>
            <Link className='text-[#0D0E43] hover:text-[#FB2E86]' to="/">Home</Link>
            <Link className='text-[#0D0E43] hover:text-[#FB2E86]' to="/pages">Pages</Link>
            <Link className='text-[#0D0E43] hover:text-[#FB2E86]' to="/products">Products</Link>
            <Link className='text-[#0D0E43] hover:text-[#FB2E86]' to="/blog">Blog </Link>
            <Link className='text-[#0D0E43] hover:text-[#FB2E86]' to="/shop">Shop</Link>
            <Link className='text-[#0D0E43] hover:text-[#FB2E86]' to="/contact">Contact</Link>
          </div>
        </div>
        <div className='flex'>
          <input type="text" className='border w-[317px] border-[#E7E6EF]' />
          <div className='bg-[#FB2E86] flex items-center justify-center h-[40px] w-[51px]'>
          <Searchicon />
          </div>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Header
