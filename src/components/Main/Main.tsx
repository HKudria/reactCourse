import s from './Main.module.css'
import React, {useEffect, useState} from 'react';
import {flickrMethodsEnum, FlickrResponseInterface, getData} from '../Api/Flirckr';
import CardV2 from './CardV2/CardV2';

export interface CardData {
    id: number
    name: string,
    content: string,
    imgPath: string,
}

function Main() {
    const [gallery, setGallery] = useState<FlickrResponseInterface>();

    useEffect(() => {
        getData({method: flickrMethodsEnum.SEARCH_PHOTO, params: '&text=sunrise'}).then(json => setGallery(json.photos))
        window.addEventListener('keypress', e => {
            if (e.key === 'Enter'){
                updateState()
            }
        });
    }, []);

    const updateState = () => {
        const query = localStorage.getItem('searchValue');
        if (query) {
            getData({
                method: flickrMethodsEnum.SEARCH_PHOTO,
                params: `&text=${query}`
            }).then(json => setGallery(json.photos))
        } else {
            console.log('empty')
        }
    }

    return (
        <>
            <div className={s.wrapper} role={'wrapper'}>
                {gallery?.photo.map((photo) => <CardV2 key={photo.id} id={photo.id} owner={photo.owner} secret={photo.secret}
                                                       server={photo.server} farm={photo.farm} title={photo.title}
                                                       ispublic={photo.ispublic}
                                                       isfriend={photo.isfriend} isfamily={photo.isfamily}
                                                       is_primary={photo.is_primary} has_comment={photo.has_comment}/>)}
            </div>
        </>
    )
}

export default Main
