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
    const [errorMessage, setErrorMessage] = useState('');
    const [gallery, setGallery] = useState<FlickrResponseInterface>();
    const [isLoad, setIsLoad] = useState(true);
    const [countArray, setCountArray] = useState<string[]>([]);

    useEffect(() => {
        getData({method: flickrMethodsEnum.SEARCH_PHOTO, params: '&text=sunrise'})
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    setErrorMessage('Something went wrong')
                }
            })
            .then(json => {
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
            })
                .then(response => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        setErrorMessage('Something went wrong')
                    }
                })
                .then(json => {
                    setCountArray([])
                    return json
                })
                .then(json => setGallery(json.photos))
        } else {
            setErrorMessage('Search input is empty')
        }
    }

    const countIncrease = (id: string) => {
        countArray.push(id)
        if (countArray.length === gallery?.photo.length) {
            setIsLoad(false)
        }
    }

    const resetError = () => {
        setTimeout(() => setErrorMessage(''), 10000)

        return(<div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div> )
    }

    return (
        <>
            {errorMessage.length > 0 && resetError()}
            {isLoad &&
                <div className={s.spinner}>
                    <div className={`${s.progress} progress`}>
                        <div className="progress-bar progress-bar-striped" role="progressbar"
                             style={{width: `${countArray.length}%`}}></div>
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
