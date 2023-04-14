import s from './Main.module.css'
import React, {useEffect, useState} from 'react';
import CardV2 from './CardV2/CardV2';
import {getPhotosState, parsePhoto} from '../../store/flickr/flickrSlice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {flickrMethodsEnum} from '../../store/flickr/FlicrkInterface';

export interface CardData {
    id: number
    name: string,
    content: string,
    imgPath: string,
}

function Main() {
    const [isLoad, setIsLoad] = useState(true);
    const [countArray] = useState<string[]>([]);
    const photoState = useAppSelector(getPhotosState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(parsePhoto({method: flickrMethodsEnum.SEARCH_PHOTO, params: '&text=sunrise'}))
    }, []);


    const countIncrease = (id: string) => {
        countArray.push(id)
        if (countArray.length === photoState.photos.length) {
            setIsLoad(false)
        }
    }

    return (
        <>
            <div className={`${s.wrapper} card`} role={'wrapper'}>
                {photoState.error && <div className="alert alert-danger" role="alert">
                    {photoState.error}
                </div>}
                {isLoad &&
                    <div className={s.spinner}>
                        <div className={`${s.progress} progress`}>
                            <div className="progress-bar progress-bar-striped" role="progressbar"
                                 style={{width: `${countArray.length}%`}}></div>
                        </div>
                    </div>
                }
                {photoState.photos.map((photo, key) => <CardV2 key={key} photo={photo} countIncrease={countIncrease}/>)}
            </div>
        </>
    )
}

export default Main
