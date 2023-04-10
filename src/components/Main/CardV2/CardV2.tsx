import React, {useEffect, useState} from 'react';
import s from './CardV2.module.css'
import {FlickrPhotoInterface} from '../../Api/Flirckr';

const CardV2 = (props: FlickrPhotoInterface) => {
    const [imgSrc, setImgSrc] = useState('');
    useEffect(() => {
        const scr = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`
        setImgSrc(scr)
    }, []);

    return (
        <div className={`${s.fontSize} card`}>
            <img className="card-img-top" src={imgSrc} alt={props.id}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    )
}

export default CardV2;