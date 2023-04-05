import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect} from 'vitest';
import {BrowserRouter as Router} from 'react-router-dom';
import Form from './Form';

describe('Header', () => {
    it('should render form', () =>{
        render(<Router><Form /></Router>);
        expect(screen.getByText(/Enter text/i)).toBeInTheDocument();
        expect(screen.getByText(/Select date/i)).toBeInTheDocument();
        expect(screen.getByText(/Check me out/i)).toBeInTheDocument();
        expect(screen.getByText(/Chose select option/i)).toBeInTheDocument();
        expect(screen.getByText(/Upload file/i)).toBeInTheDocument();
        expect(screen.getByText(/Default radio 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Default radio 2/i)).toBeInTheDocument();
        expect(screen.getByRole('button').textContent).toContain('Submit');
    })

    it('should show error', () =>{
        const { getByTestId, findByText } = render(<Router><Form /></Router>);
        getByTestId('submit');
        fireEvent.click(getByTestId('submit'));
        findByText('Fill the text');
        findByText('Date should be field');
        findByText('Check checkbox should be');
        findByText('Select should be selected');
        findByText('File should be uploaded');
        findByText('File should be uploaded');
    })
})