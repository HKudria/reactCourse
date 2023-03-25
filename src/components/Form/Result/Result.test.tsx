import {render, screen} from '@testing-library/react';
import {describe, expect} from 'vitest';
import {BrowserRouter as Router} from 'react-router-dom';
import Result from './Result';

describe('Header', () => {
    it('should render form', () =>{
        render(<Router><Result text={'test-text'} select={'test-select'} date={'test-date'} file={'test-file'} checkbox={true} switcher={'radio1'}/></Router>);
        expect(screen.getByText(/Text:/i)).toBeInTheDocument();
        expect(screen.getByText(/Date:/i)).toBeInTheDocument();
        expect(screen.getByText(/Select:/i)).toBeInTheDocument();
        expect(screen.getByText(/Checkbox:/i)).toBeInTheDocument();
        expect(screen.getByText(/File:/i)).toBeInTheDocument();
        expect(screen.getByText(/Switcher:/i)).toBeInTheDocument();
    })
})