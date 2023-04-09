import s from './Main.module.css'
import React, {useEffect, useState} from 'react';
import data from '../../assets/data.json'
import Card from './Card/Card';
import {flickrMethodsEnum, FlickrPhotoInterface, FlickrResponseInterface, getData} from '../Api/Flirckr';
import {json} from 'react-router-dom';
import CardV2 from './CardV2/Card';

export interface CardData {
    id: number
    name: string,
    content: string,
    imgPath: string,
}

function Main() {
    const [gallery, setGallery] = useState<FlickrResponseInterface>();
    useEffect(() => {
        getData({method: flickrMethodsEnum.GET_PHOTO}).then(json => setGallery(json.photos))
        console.log(gallery)
    }, []);

    return (
        <>
            <div className={s.wrapper} role={'wrapper'}>
                {gallery?.photo.map((photo) => <CardV2 id={photo.id} owner={photo.owner} secret={photo.secret}
                                                       server={photo.server} farm={photo.farm} title={photo.title} ispublic={photo.ispublic}
                                                       isfriend={photo.isfriend} isfamily={photo.isfamily} is_primary={photo.is_primary} has_comment={photo.has_comment} />)}
            </div>
        </>
    )
}

export default Main
