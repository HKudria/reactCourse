import s from './Form.module.css'
import React, {ChangeEvent} from 'react';
import Result from './Result/Result';

interface FormStateInterface {
    text: string,
    date: string,
    select: string,
    checkbox: boolean,
    switcher: string,
    isSubmit: boolean,
    file: React.RefObject<HTMLInputElement>
    error: FormError
    sumbtions: FormResult[]
}

export interface FormResult {
    text: string,
    date: string,
    select: string,
    checkbox: boolean,
    switcher: string,
    file: string
}

interface FormError {
    text?: string,
    date?: string,
    select?: string,
    checkbox?: string,
    switcher?: string,
    file?: string
}

export default class Form extends React.Component {
    state: FormStateInterface = {
        text: '',
        date: '',
        select: '',
        checkbox: false,
        isSubmit: false,
        switcher: 'radio1',
        file: React.createRef(),
        error: {},
        sumbtions: []
    };

    onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, text: event.target.value})
    };

    onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, date: event.target.value})
    };

    onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState({...this.state, select: event.target.value})
    };

    onChangeCheckbox = () => {
        this.setState({...this.state, checkbox: !this.state.checkbox})
    };

    onChangeSwitcher = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, switcher: event.target.value})
    };

    onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const validation = this.validateForm()
        if (validation.valid) {
            this.setState({...this.state, isSubmit: true, error: validation.error})
            this.addSubmittedValue()
        } else {
            this.setState({...this.state, isSubmit: false, error: validation.error})
        }

    }

    validateForm = () => {
        const error: FormError = {}
        if (this.state.text.length === 0) error.text = 'Fill text';
        if (this.state.date.length === 0) error.date = 'Fill date';
        if (!this.state.checkbox) error.checkbox = 'Check checkbox';
        if (!this.state.select) error.select = 'Select should be selected';
        if (!this.state.switcher) error.switcher = 'Switcher should be chosen';
        if (this.state.file.current && this.state.file.current.files && this.state.file.current.files.length === 0) error.file = 'Fill should be uploaded';
        if (Object.keys(error).length === 0) {
            return {valid: true, error: {}}
        } else {
            return {valid: false, error: error}
        }
    }

    addSubmittedValue = () => {
        if (Object.keys(this.state.error).length === 0) {
            const date = new Date(this.state.date)
            const result: FormResult  = {
                date: date.toLocaleString(),
                text: this.state.text,
                select: this.state.select,
                checkbox: this.state.checkbox,
                file: (this.state.file.current && this.state.file.current.files && this.state.file.current.files[0].name) ?? '',
                switcher: this.state.switcher
            }

            this.setState({
                    ...this.state,
                    sumbtions: [...this.state.sumbtions, result],
                    text: '',
                    date: '',
                    checkbox: false,
                    switcher: 'radio1',
                    isSubmit: false,
                    error: {}
                },
            );
            if (this.state.file.current) this.state.file.current.value = '';
        }
        return (<></>)
    }

    render() {
        return (
            <div className={s.wrapper}>
                <form className={s.form} onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label htmlFor="text" className="form-label">Enter text</label>
                        <input type="text" className="form-control" id="text" placeholder="Enter text"
                               onChange={this.onChangeText} value={this.state.text}/>
                        {this.state.error.text &&
                            <div className="invalid-feedback d-block">{this.state.error.text}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="date" className="form-label">Select date</label>
                        <input type="date" className="form-control" id="date" onChange={this.onChangeDate}
                               value={this.state.date}/>
                        {this.state.error.date &&
                            <div className="invalid-feedback d-block">{this.state.error.date}</div>}
                    </div>
                    <div className="form-check">
                        <label className="form-label" htmlFor="checkbox">Check me out</label>
                        <input type="checkbox" className="form-check-input" id="checkbox"
                               onChange={this.onChangeCheckbox} checked={this.state.checkbox}/>
                    </div>
                    {this.state.error.checkbox &&
                        <div className="invalid-feedback d-block">{this.state.error.checkbox}</div>}
                    <div className="form-group">
                        <label className="form-label" htmlFor="select">Chose select option</label><br/>
                        <select value={this.state.select} id="select" onChange={this.onChangeSelect}
                                className="form-select form-select-sm">
                            <option></option>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                        {this.state.error.select &&
                            <div className="invalid-feedback d-block">{this.state.error.select}</div>}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="file">Upload file</label><br/>
                        <input type="file" className="form-control" id="file" ref={this.state.file}/>
                        {this.state.error.file &&
                            <div className="invalid-feedback d-block">{this.state.error.file}</div>}
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="radio1" id="flexRadioDefault1"
                               onChange={this.onChangeSwitcher} checked={this.state.switcher === 'radio1'}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Default radio 1
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="radio2" id="flexRadioDefault2"
                               onChange={this.onChangeSwitcher} checked={this.state.switcher === 'radio2'}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Default radio 2
                        </label>
                    </div>
                    {this.state.error.switcher &&
                        <div className="invalid-feedback d-block">{this.state.error.switcher}</div>}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {this.state.sumbtions.map((el, index) => <Result key={index} text={el.text} select={el.select} date={el.date} file={el.file} checkbox={el.checkbox} switcher={el.switcher}/>)}
            </div>
        );
    }
}
