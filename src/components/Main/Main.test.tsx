import { render, screen } from '@testing-library/react';
import Main from './Main';
import {describe, expect} from 'vitest';

describe('Main', () => {
    it('should render wrapper', () =>{
        render(<Main />);
        expect(screen.getByRole('wrapper').className).toContain('_wrapper');
    })

    it('should render card', () =>{
        render(<Main />);
        expect(screen.getByText(/Zathin/i)).toBeInTheDocument();
        expect(screen.getByText(/Stim/i)).toBeInTheDocument();
    })
})