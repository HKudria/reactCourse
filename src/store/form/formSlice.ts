import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {FormState} from './FormInterface';

const initialState: FormState = {
    form: [],
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addFormResult(state, payload) {
            state.form = [...state.form, payload.payload]
        },
    },
});

export const {addFormResult} = formSlice.actions;

export const getFormState = (state: RootState): FormState => state.form;

export default formSlice.reducer;
