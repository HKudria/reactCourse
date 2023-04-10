import {fireEvent, render, screen} from '@testing-library/react';
import Modal from './Modal';
import {describe, expect} from 'vitest';
import {FlickrPhotoInterface} from '../../../Api/Flirckr';

describe('Modal Test', () => {
    it('should have photo info', () => {
        const mock: FlickrPhotoInterface = {
            id: '52792908509',
            owner: '197619806@N06',
            secret: 'dcc86dabd4',
            server: '65535',
            title: 'Maewou Studio Paper Paintings',
            farm: 66,
            isfamily: true,
            isfriend: true,
            ispublic: true,
            has_comment: true,
            is_primary: true
        }

        let result = ''
        const testFn = () => {
            result = 'ok'
        }

        render(<Modal photo={mock} closeModal={testFn} src={'https://farm66.staticflickr.com/65535/52807015108_c3819bba08.jpg'}/>);
        expect(screen.getByText(/Maewou Studio Paper Paintings/i)).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: /X/i }))
        expect(result === 'ok');
    })
})