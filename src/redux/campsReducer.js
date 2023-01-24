import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initList: [],
    changedList: [],
}

export const campusSlice = createSlice({
    name: "campus",
    initialState,
    reducers: {
        init: (state, action) => {
            state.initList = action.payload;
            state.changedList = action.payload;
        },
        setSearchList: (state, action) => {
            if (action.payload){
                state.changedList = state.changedList.filter(first =>  first.camp_name.toLowerCase().includes(action.payload.toLowerCase()))
            } else {
                state.changedList = state.initList;
            }

        }
    }
});

export const { init, setSearchList } = campusSlice.actions;

export default campusSlice.reducer;