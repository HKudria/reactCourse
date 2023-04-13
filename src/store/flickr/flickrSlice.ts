import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {LoadingStatusEnum, FlickrState, ParsePhotoThunkInterface} from './FlicrkInterface';

const API_KEY = '16b6008f7224409dd68424b013cbbdcc'
const URL = 'https://api.flickr.com/services/rest/?method='


const initialState: FlickrState = {
    photos: [],
    status: LoadingStatusEnum.LOADING,
    searchVal: '',
    error: '',
};

export const parsePhoto = createAsyncThunk('photo/search', async ({params, method} : ParsePhotoThunkInterface, {rejectWithValue}) => {
    const response = await fetch(`${URL}${method}&api_key=${API_KEY}${params}&format=json&nojsoncallback=1`);
    const data = await response.json();
    if (data.stat === 'ok') {
        return await data;
    }
    return rejectWithValue(data.code);
});


export const flickrSlice = createSlice({
    name: 'flickr',
    initialState,
    reducers: {
        setSearch(state, payload) {
            state.searchVal = payload.payload
        },
        setError(state, payload) {
            state.error = payload.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(parsePhoto.pending, (state) => {
                state.status = LoadingStatusEnum.LOADING;
            })
            .addCase(parsePhoto.fulfilled, (state, action) => {
                state.status = LoadingStatusEnum.IDLE;
                state.photos = action.payload.photos.photo;
            })
            .addCase(parsePhoto.rejected, (state) => {
                state.status = LoadingStatusEnum.FAILED;
                state.error = 'Problem loading data';
                setTimeout(() => {state.error = ''}, 10000)
            });
    },
});

export const {setSearch, setError} = flickrSlice.actions;

export const getPhotosState = (state: RootState): FlickrState => state.photo;

export default flickrSlice.reducer;
