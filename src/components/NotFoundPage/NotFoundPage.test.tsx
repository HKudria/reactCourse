import { render, screen } from '@testing-library/react';
import {NotFoundPage} from './NotFoundPage';
import {describe, expect} from 'vitest';
import {BrowserRouter as Router} from 'react-router-dom';

describe('NotFoundPage', () => {
    it('should have image', () =>{
        render(<Router><NotFoundPage /></Router>);
        expect(screen.getByAltText(/notFound/i)).toBeInTheDocument();
    })

    it('should have button', () =>{
        render(<Router><NotFoundPage /></Router>);
        expect(screen.getByRole('button').className).toContain('_button');
        expect(screen.getByRole('button').textContent).toContain('Return to main page');
    })
})