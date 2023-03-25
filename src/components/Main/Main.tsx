import s from './Main.module.css'
import React from 'react';
import data from '../../assets/data.json'
import Card from './Card/Card';

export interface CardData {
    id: number
    name: string,
    content: string,
    imgPath: string,
}

function Main() {

    return (
        <>
            <div className={s.wrapper} role={'wrapper'}>
                {data.map((cardData: CardData) => <Card key={cardData.id} id={cardData.id} name={cardData.name}
                                                        content={cardData.content} imgPath={cardData.imgPath}/>)}
            </div>
        </>
    )
}

export default Main
