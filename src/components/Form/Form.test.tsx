import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect} from 'vitest';
import {BrowserRouter as Router} from 'react-router-dom';
import Form from './Form';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('Header', () => {
    it('should render form', () => {
        render(<Provider store={store}><Router><Form/></Router></Provider>);
        expect(screen.getByText(/Enter text/i)).toBeInTheDocument();
        expect(screen.getByText(/Select date/i)).toBeInTheDocument();
        expect(screen.getByText(/Check me out/i)).toBeInTheDocument();
        expect(screen.getByText(/Chose select option/i)).toBeInTheDocument();
        expect(screen.getByText(/Upload file/i)).toBeInTheDocument();
        expect(screen.getByText(/Default radio 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Default radio 2/i)).toBeInTheDocument();
        expect(screen.getByRole('button').textContent).toContain('Submit');
    })

    it('should show error', () => {
        const {getByTestId, findByText} = render(<Provider store={store}><Router><Form/></Router></Provider>);
        getByTestId('submit');
        fireEvent.click(getByTestId('submit'));
        findByText('Fill the text');
        findByText('Date should be field');
        findByText('Check checkbox should be');
        findByText('Select should be selected');
        findByText('File should be uploaded');
    })

    it('should render card', () => {
        const {getByTestId, queryByText} = render(<Provider store={store}><Router><Form/></Router></Provider>);
        fireEvent.change(getByTestId('text'), {target: {value: 'Good Day'}});
        fireEvent.change(getByTestId('date'), {target: {value: (new Date(Date.now())).toISOString().split('T')[0]}});
        fireEvent.click(getByTestId('checkbox'));
        fireEvent.change(getByTestId('select'), {target: {value: 2}})
        fireEvent.change(getByTestId('file'), { target: { files: ['test'] }})
        fireEvent.click(getByTestId('switch'));
        fireEvent.click(getByTestId('submit'));
        expect(queryByText('File should be uploaded')).not.toBeInTheDocument()
    })

})