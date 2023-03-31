import React from 'react';
import s from './Card.module.css'
import {CardData} from '../Main';

const Card = (props: CardData) => {

    return (
        <div className={`${s.fontSize} card`}>
            <img className="card-img-top" src={props.imgPath} alt={props.name}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    )
}

export default Card;