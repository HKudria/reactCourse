import s from './Form.module.css'
import React, {ChangeEvent} from 'react';

interface FormStateInterface {
    text: string,
    date: string,
    select: string,
    checkbox: boolean,
    switcher: string,
    file: string
    error?: FormError
}

interface FormError {
    text: string,
    date: string,
    select: string,
    checkbox: boolean,
    switcher: string,
    file: string
}

export default class Form extends React.Component {
    state: FormStateInterface = {
        text: '',
        date: '',
        select: '',
        checkbox: false,
        switcher: '',
        file: ''
    };

    onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, text: event.target.value})
    };

    onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, date: event.target.value})
    };

    // onChangeSelect = (event: ChangeEvent<HTMLInputElement>) => {
    //     this.setState({...this.state, select: event.target.value})
    // };

    onChangeCheckbox = () => {
        this.setState({...this.state, checkbox: !this.state.checkbox})
    };

    // onChangeSwitcher = (event: ChangeEvent<HTMLInputElement>) => {
    //     this.setState({...this.state, select: event.target.value})
    // };
    //
    // onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    //     this.setState({...this.state, select: event.target.value})
    // };

    render() {
        return (
            <div className={s.wrapper}>
            <form className={s.form}>
                <div className="form-group">
                    <label htmlFor="text">Enter text</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter text" onChange={this.onChangeText} value={this.state.text}/>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Select date</label>
                    <input type="date" className="form-control" id="date" onChange={this.onChangeDate} value={this.state.date}/>
                </div>
                <div className="form-check">
                    <label className="form-check-label" htmlFor="checkbox">Check me out</label>
                    <input type="checkbox" className="form-check-input" id="checkbox" onChange={this.onChangeCheckbox} checked={this.state.checkbox}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        );
    }
}
