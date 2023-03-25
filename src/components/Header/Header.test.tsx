import { render, screen } from '@testing-library/react';
import Header from './Header';
import {describe, expect} from 'vitest';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Header', () => {
    it('should render navBar', () =>{
        render(<Router><Header /></Router>);
        expect(screen.getByRole('navbar').className).toContain('navbar');
    })

    it('should render searchBar', () =>{
        render(<Router><Header /></Router>);
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    })

})