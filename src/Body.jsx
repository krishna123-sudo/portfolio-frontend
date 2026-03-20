import React from 'react'
import Tabs from './header/Tabs'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer';
import Profile from './components/Profile';

function Body() {
    return (
        <div>
            <Tabs />
            {/* <Profile /> */}
            <Outlet />
            <Footer />
        </div>
    )
}

export default Body;