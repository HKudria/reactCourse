import { render, screen } from '@testing-library/react';
import Main from './Main';
import {describe, expect} from 'vitest';

describe('Main', () => {
    it('should render wrapper', () =>{
        render(<Main />);
        expect(screen.getByRole('wrapper').className).toContain('_wrapper');
    })

    it('should render card', () =>{
        const { container } = render(<Main />);
        expect(container.getElementsByClassName('card').length).toBe(1);
    })
})