import React, {useEffect, useState} from 'react';
import s from './CardV2.module.css'
import {FlickrPhotoInterface} from '../../Api/Flirckr';
import Modal from './Modal/Modal';

interface CardV2PropsInterface {
    photo: FlickrPhotoInterface
}
const CardV2 = ({photo}: CardV2PropsInterface) => {
    const [imgSrc, setImgSrc] = useState('');
    const [isModal, setIsModal] = useState(false);
    useEffect(() => {
        const scr = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
        setImgSrc(scr)
    }, []);

    const toggleModal = () => {
        setIsModal(!isModal)
    }

    return (
        <>
            {isModal && <Modal photo={photo} closeModal={toggleModal} src={imgSrc}/>}
            <div className={`${s.fontSize} card`} onClick={toggleModal}>
                <img className="card-img-top" src={imgSrc} alt={photo.id}/>
                <div className="card-body">
                    <h5 className="card-title">{photo.title}</h5>
                </div>
            </div>
        </>
    )
}

export default CardV2;