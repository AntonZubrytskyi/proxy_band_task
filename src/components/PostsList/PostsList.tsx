import React, {FC, useEffect} from 'react';
import './posts-list.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {postsActions} from "../../redux";
import {useParams} from "react-router-dom";

const PostsList: FC = () => {
    const dispatch = useAppDispatch()
    const {getAllPosts} = postsActions;

    const {posts} = useAppSelector(state => state.postsReducer);

    const {id} = useParams()

    useEffect(() => {
        if (id != null) {
            dispatch(getAllPosts(id))
        }
    }, [])
    return (
        <div className='posts-container'>
            {posts.map(post => (
                <div className='post-box'>
                    <span className='post-item'><span className='post-name'>Title:</span> {post.title}</span>
                    <span className='post-item'><span className='post-name'>Body:</span> {post.body}</span>
                </div>
            ))}
        </div>
    );
};

export default PostsList;
