import React, {FC} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


const App: FC = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route path='users' element={<UsersPage/>}/>
                    <Route path='users/:id/posts' element={<UserPostsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
