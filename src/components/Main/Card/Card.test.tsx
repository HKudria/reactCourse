import { render, screen } from '@testing-library/react';
import Card from './Card';
import {describe, expect} from 'vitest';

describe('Card', () => {
    it('should have full card', () =>{
        render(<Card id={2} name='name' content='content' imgPath='path'/>);
        expect(screen.getByText(/name/i)).toBeInTheDocument();
        expect(screen.getByText(/content/i)).toBeInTheDocument();
    })
})