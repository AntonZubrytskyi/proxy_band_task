import React, {FC} from 'react';
import './navbar.scss';
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <div className='nav-container'>
            <span className='nav-title'>USERS BLOG</span>
            <Link to='/users'>
                <Button styleClass='btn__home'>Users</Button>
            </Link>
        </div>
    );
};

export default Navbar;
