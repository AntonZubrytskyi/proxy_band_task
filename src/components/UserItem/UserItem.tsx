import React, {FC, useState} from 'react';
import './user-item.scss';
import {IUser} from "../../interfaces";
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";
import AlbumsPopup from "../AlbumsPopup/AlbumsPopup";

interface IProps {
    user: IUser,
}

const UserItem: FC<IProps> = ({user}) => {
    const {id, name, username, address, company, email, phone, website} = user;

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const openPopup = () => {
        setIsOpenPopup(true)
    }
    const closePopup = () => {
        setIsOpenPopup(false)
    }
    return (
        <div className='item-container'>
            <span className='item'><span className='item-name'>Name:</span> {name}</span>
            <span className='item'><span className='item-name'>Username:</span> {username}</span>
            <span className='item'><span className='item-name'>Company:</span> {company.name}</span>
            <span className='item'><span className='item-name'>City:</span> {address.city}</span>
            <span className='item'><span className='item-name'>Email:</span> {email}</span>
            <span className='item'><span className='item-name'>Phone:</span> {phone}</span>
            <span className='item'><span className='item-name'>Website:</span> {website}</span>
            <div className='item-btn'>
                <Link to={`/users/${id}/posts`}>
                    <Button styleClass='btn__blue-rounded'>Posts</Button>
                </Link>
                <Button onClick={openPopup} styleClass='btn__green-rounded'>Albums</Button>
            </div>
            {isOpenPopup && <AlbumsPopup closePopup={closePopup} id={id}/>}
        </div>
    );
};

export default UserItem;
