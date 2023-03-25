import React from 'react';
import {FormResult} from '../Form';

export default class Result extends React.Component<FormResult> {

    render() {
        return (
            <ul className={'list-group'}>
                <li className="list-group-item">Text: {this.props.text}</li>
                <li className="list-group-item">Date: {this.props.date}</li>
                <li className="list-group-item">Select: {this.props.select}</li>
                <li className="list-group-item">Checkbox: {this.props.checkbox}</li>
                <li className="list-group-item">File: {this.props.file}</li>
                <li className="list-group-item">Switcher: {this.props.switcher}</li>
            </ul>
        );
    }
}
