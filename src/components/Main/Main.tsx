import s from './Main.module.css'
import React, {useEffect, useState} from 'react';
import {flickrMethodsEnum, FlickrResponseInterface, getData} from '../Api/Flirckr';
import CardV2 from './CardV2/CardV2';
import {json} from 'react-router-dom';

export interface CardData {
    id: number
    name: string,
    content: string,
    imgPath: string,
}

function Main() {

    const [gallery, setGallery] = useState<FlickrResponseInterface>();
    const [isLoad, setIsLoad] = useState(true);
    const [countArray, setCountArray] = useState<string[]>([]);

    useEffect(() => {
        getData({method: flickrMethodsEnum.SEARCH_PHOTO, params: '&text=sunrise'}).then(json => {
            setGallery(json.photos)
        })
        window.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                updateState()
            }
        });
    }, []);

    const updateState = () => {
        const query = localStorage.getItem('searchValue');
        if (query) {
            setIsLoad(true)
            getData({
                method: flickrMethodsEnum.SEARCH_PHOTO,
                params: `&text=${query}`
            }).then(json => {
                setCountArray([])
                return json
            }).then(json => setGallery(json.photos))
        } else {
            console.log('empty')
        }
    }

    const countIncrease = (id: string) => {
       countArray.push(id)
        if(countArray.length === gallery?.photo.length){
            setIsLoad(false)
        }
    }

    return (
        <>
            {isLoad &&
                <div className={s.spinner}>
                    <div className={`${s.progress} progress`}>
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: countArray.length + '%'}}></div>
                    </div>
                </div>
            }
            <div className={s.wrapper} role={'wrapper'}>
                {gallery?.photo.map((photo, key) => <CardV2 key={key} photo={photo} countIncrease={countIncrease}/>)}
            </div>
        </>
    )
}

export default Main
