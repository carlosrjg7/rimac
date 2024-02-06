import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='container-fluid p-0 home-bg'>
        <Header/>
        <div className='content'>{children}</div>
        <Footer />
    </div>
  )
}

export default Layout