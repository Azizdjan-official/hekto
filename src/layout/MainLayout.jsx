import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
