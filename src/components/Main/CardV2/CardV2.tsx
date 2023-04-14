import React, {useState} from 'react';
import s from './CardV2.module.css'
import Modal from './Modal/Modal';
import {FlickrPhotoInterface} from '../../../store/flickr/FlicrkInterface';

interface CardV2PropsInterface {
    photo: FlickrPhotoInterface
    countIncrease: (id: string) => void
}
const CardV2 = ({photo, countIncrease}: CardV2PropsInterface) => {
    const [isModal, setIsModal] = useState(false);
    const toggleModal = () => {
        setIsModal(!isModal)
    }

    return (
        <>
            {isModal && <Modal photo={photo} closeModal={toggleModal} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}/>}
            <div className={`${s.fontSize} ${s.cardBody} card`} onClick={toggleModal} data-testid='card'>
                <img className="card-img-top" src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.id} onLoad={() => countIncrease(photo.id)}/>
                <div className="card-body">
                    <h5 className="card-title">{photo.title}</h5>
                </div>
            </div>
        </>
    )
}

export default CardV2;