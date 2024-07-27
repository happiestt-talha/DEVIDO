import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    video: null,
    loading: false,
    error: false
}
const videoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {


    }
})

// export const { loginStart, loginSuccess, loginFailure, logout } = videoSlice.actions

export default videoSlice.reducer