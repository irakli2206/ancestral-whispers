import Banner from '@/components/banner'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <Banner />
            <Navbar />

            <Outlet />

            <Footer />
        </>
    )
}

export default Root