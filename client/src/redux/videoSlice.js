import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentVideo: null,
    loading: false,
    error: false
}
const videoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true
            state.error = false
        },
        fetchSuccess: (state, action) => {
            state.loading = false
            state.currentVideo = action.payload
            state.error = false
        },
        fetchFailure: (state) => {
            state.loading = false
            state.error = true
        }
    }
})

export const { fetchStart, fetchSuccess, fetchFailure } = videoSlice.actions

export default videoSlice.reducer