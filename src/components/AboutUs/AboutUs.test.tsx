import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';
import {describe, expect} from 'vitest';

describe('AboutUs', () => {
    it('should have description', () =>{
        render(<AboutUs />);
        expect(screen.getByText(/Page about US!/i)).toBeInTheDocument();
    })
})