import s from './Modal.module.css'
import {FlickrPhotoInterface} from '../../../Api/Flirckr';
import React from 'react';

interface NewsModalPropsInterface {
    photo: FlickrPhotoInterface
    closeModal: () => void
    src: string
}

const Modal = ({photo, closeModal, src}: NewsModalPropsInterface) => {

    const closeByBackground = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target?.id === 'model') {
            closeModal()
        }
    }

    return (
        <div className={s.background} onClick={closeByBackground} id='model'>
            <div className={`${s.modal}`}>
                <div className={`${s.cards} card`}>
                    <div className={s.closeButton}>
                        <button type="button" className={`${s.button} btn btn-primary`} onClick={closeModal}>X</button>
                    </div>
                    <img className={`${s.img} card-img-top`} src={src} alt={photo.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{photo.title}</h5>
                        <p>ID: {photo.id}</p>
                        <p>SECRET: {photo.secret}</p>
                        <p>SERVER: {photo.server}</p>
                        <p>OWNER: {photo.owner}</p>
                        <p>FARM: {photo.farm}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal
