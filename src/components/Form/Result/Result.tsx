import React from 'react';
import {FormInterface} from '../Form';

const Result = (props: FormInterface) => {
    return (
        <ul className={'list-group'}>
            <li className="list-group-item">Text: {props.text}</li>
            <li className="list-group-item">Date: {props.date}</li>
            <li className="list-group-item">Select: {props.select}</li>
            <li className="list-group-item">Checkbox: {props.checkbox ? 'true' : 'false'}</li>
            <li className="list-group-item">File: {props.file && props.file[0].name}</li>
            <li className="list-group-item">Switcher: {props.switcher}</li>
        </ul>
    );
}

export default Result;
