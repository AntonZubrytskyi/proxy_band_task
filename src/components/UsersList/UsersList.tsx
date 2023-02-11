import React, {FC, useEffect} from 'react';
import './users-list.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userActions} from "../../redux";
import UserItem from "../UserItem/UserItem";

const UsersList: FC = () => {

    const dispatch = useAppDispatch()
    const {getAllUsers} = userActions;

    const {users} = useAppSelector(state => state.usersReducer)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div className='list-container'>
            {users.map(user => <UserItem key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersList;
