import {configureStore} from '@reduxjs/toolkit';
import photoReducer from './flickr/flickrSlice';
import formReducer from './form/formSlice'

export const store = configureStore({
    reducer: {
        photo: photoReducer,
        form: formReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
