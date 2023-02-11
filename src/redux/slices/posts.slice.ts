import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPost} from "../../interfaces";
import {postsService} from "../../services";


interface IState {
    posts: IPost[],
    formErrors: any,
    status: string,
}

const initialState: IState = {
    posts: [],
    formErrors: {},
    status: '',
};
const getAllPosts = createAsyncThunk<IPost[], string>(
    'postsSlice/getAll',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll(id);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);
const usersSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.fulfilled, (state, action) => {
                const data = action.payload as any;
                state.posts = data;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                const errors = action.payload as any;
                console.log(errors);
            })
    }
});

const {reducer: postsReducer, actions: {}} = usersSlice;

const postsActions = {
    getAllPosts
}

export {
    postsActions,
    postsReducer
};
