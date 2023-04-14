import { render, screen } from '@testing-library/react';
import Header from './Header';
import {describe, expect} from 'vitest';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('Header', () => {
    it('should render navBar', () =>{
        render(<Provider store={store}><Router><Header /></Router></Provider>);
        expect(screen.getByRole('navbar').className).toContain('navbar');
    })

    it('should render searchBar', () =>{
        render(<Provider store={store}><Router><Header /></Router></Provider>);
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    })

})