import {render, screen} from '@testing-library/react';
import CardV2 from './CardV2';
import {describe, expect} from 'vitest';
import {FlickrPhotoInterface} from '../../Api/Flirckr';

describe('Card', () => {
    it('should have full card', () => {
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
        let count = '';
        const countIncrease = (id: string) => {
            count = id;
        }
        render(<CardV2 photo={mock} countIncrease={countIncrease}/>);
        expect(screen.getByText(/Maewou Studio Paper Paintings/i)).toBeInTheDocument();
        expect(count === mock.id);
    })
})