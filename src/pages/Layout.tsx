import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer/>
    </>
}
