import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAlbum} from "../../interfaces";
import {albumsService} from "../../services";


interface IState {
    albums: IAlbum[],
    formErrors: any,
    status: string,
}

const initialState: IState = {
    albums: [],
    formErrors: {},
    status: '',
};
const getAllAlbums = createAsyncThunk<IAlbum[], number>(
    'albumsSlice/getAll',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await albumsService.getAll(id);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);
const albumsSlice = createSlice({
    name: 'albumsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllAlbums.fulfilled, (state, action) => {
                const data = action.payload as any;
                state.albums = data;
            })
            .addCase(getAllAlbums.rejected, (state, action) => {
                const errors = action.payload as any;
                console.log(errors);
            })
    }
});

const {reducer: albumsReducer, actions: {}} = albumsSlice;

const albumsActions = {
    getAllAlbums
}

export {
    albumsActions,
    albumsReducer
};

