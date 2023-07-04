import {Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Part2top from "../components/Part2top";
import Part2under from '../components/Part2under';

const Layout = () => {
    return (
    <>
    <Navbar />
    <Part2top />
    <Part2under/>

    </>
    )
}

export default Layout;