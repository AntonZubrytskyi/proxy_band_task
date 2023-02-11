import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import './main-layout.scss';
import Navbar from "../../components/Navbar/Navbar";

const MainLayout: FC = () => {
    return (
        <div className='body-wrap'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
