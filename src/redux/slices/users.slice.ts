import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
import {usersService} from "../../services";


interface IState {
    users: IUser[],
    formErrors: any,
    status: string,
}

const initialState: IState = {
    users: [],
    formErrors: {},
    status: '',
};
const getAllUsers = createAsyncThunk<IUser[], void>(
    'usersSlice/getAll',
    async (arg, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getAll();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);
const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.fulfilled, (state, action) => {
                const data = action.payload as any;
                state.users = data;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                const errors = action.payload as any;
                console.log(errors);
            })
    }
});

const {reducer: usersReducer, actions: {}} = usersSlice;

const userActions = {
    getAllUsers
}

export {
    userActions,
    usersReducer
};
