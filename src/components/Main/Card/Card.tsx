import React from 'react';
import s from './Card.module.css'
import {CardData} from '../Main';

export default class Card extends React.Component<CardData> {

    render() {
        return (
            <div className={`${s.fontSize} card`}>
                <img className="card-img-top" src={this.props.imgPath} alt={this.props.name}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.content}</p>
                </div>
            </div>
        )
    }
}