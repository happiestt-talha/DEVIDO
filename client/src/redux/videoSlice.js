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
        },
        like: (state, action) => {
            if (!state.currentVideo.likes.includes(action.payload)) {
                state.currentVideo.likes.push(action.payload);
                state.currentVideo.dislikes.splice(
                    state.currentVideo.dislikes.indexOf(action.payload)
                    , 1);
            }

        },
        dislike: (state, action) => {
            if (!state.currentVideo.dislikes.includes(action.payload)) {
                state.currentVideo.dislikes.push(action.payload)
                state.currentVideo.likes.splice(
                    state.currentVideo.likes.indexOf(action.payload)
                    , 1)
            }
            else {
            }
        }
    }
})

export const { fetchStart, fetchSuccess, fetchFailure, like, dislike } = videoSlice.actions

export default videoSlice.reducer