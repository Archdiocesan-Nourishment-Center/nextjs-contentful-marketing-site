import BottomBar from '@/components/BottomBar/BottomBar'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import NavBar from '@/components/NavBar/NavBar'
import TopBar from '@/components/TopBar/TopBar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <TopBar />
        <Header />
        <NavBar />
      </header>
        {children}
      <footer>
        <Footer />
        <BottomBar />
      </footer>
    </>
  )
}

export default Layout