import Navbar from '@/components/navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <Navbar />

            <Outlet />
        </>
    )
}

export default Root