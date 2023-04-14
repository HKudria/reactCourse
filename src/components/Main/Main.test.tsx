import { render, screen } from '@testing-library/react';
import Main from './Main';
import {describe, expect} from 'vitest';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('Main', () => {
    it('should render wrapper', () =>{
        render(<Provider store={store}><Main /></Provider>);
        expect(screen.getByRole('wrapper').className).toContain('_wrapper');
    })

    it('should render card', () =>{
        const { container } = render(<Provider store={store}><Main /></Provider>);
        expect(container.getElementsByClassName('card').length).toBe(1);
    })
})