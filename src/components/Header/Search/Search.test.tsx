import {fireEvent, render, screen} from '@testing-library/react';
import Search from './Search';
import {describe, expect} from 'vitest';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../../store/store';
describe('Header', () => {

    it('should render searchBar', () =>{
        render(<Provider store={store}><Router><Search /></Router></Provider>);
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    })

    it('should render change input', () =>{
        render(<Provider store={store}><Router><Search /></Router></Provider>);
        const input = screen.getByLabelText('Search')
        expect(input.value).toBe('')
        fireEvent.change(input, {target: {value: 'Good Day'}})
        expect(input.value).toBe('Good Day')
        fireEvent.keyDown(input, {key: 'Enter', keyCode: 13})
        expect(input.value).toBe('')
        fireEvent.keyDown(input, {key: 'Enter', keyCode: 13})
    })


})