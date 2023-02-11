import React, {FC, useEffect} from 'react';
import './albums-popup.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {albumsActions} from "../../redux";
import {Button} from "../Button/Button";

interface IProps {
    id: number;
    closePopup: () => void
}

const AlbumsPopup: FC<IProps> = ({id, closePopup}) => {

    const dispatch = useAppDispatch()
    const {getAllAlbums} = albumsActions;

    const {albums} = useAppSelector(state => state.albumsReducer)

    useEffect(() => {
        dispatch(getAllAlbums(id))
    }, [])
    return (
        <div onClick={closePopup} className='albums-container'>
            <div className='albums-box'>
                <span className='albums-title'>Albums:</span>
                {albums.map(album => (
                    <div key={album.id}>
                    <span className='album-item'>
                        <span className='album-name'>Title: </span>
                        {album.title}
                    </span>
                    </div>
                ))}
                <Button onClick={closePopup} styleClass='btn__close'>Close</Button>
            </div>
        </div>
    );
};

export default AlbumsPopup;
