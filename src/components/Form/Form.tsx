import s from './Form.module.css'
import React, {useState} from 'react';
import Result from './Result/Result';
import {SubmitHandler, useForm} from 'react-hook-form';
import {FormInterface} from '../../store/form/FormInterface';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addFormResult, getFormState} from '../../store/form/formSlice';

const Form = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const fromState = useAppSelector(getFormState);
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FormInterface> = data => {
        dispatch(addFormResult(data))
        reset()
    }

    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="text" className="form-label">Enter text</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter text"
                           {...register('text', {required: true})}/>
                    {errors.text && <div className="invalid-feedback d-block">Fill the text</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="date" className="form-label">Select date</label>
                    <input type="date" className="form-control" id="date" {...register('date', {required: true})}/>
                    {errors.date && <div className="invalid-feedback d-block">Date should be field</div>}
                </div>
                <div className="form-check">
                    <label className="form-label" htmlFor="checkbox">Check me out</label>
                    <input type="checkbox" className="form-check-input"
                           id="checkbox" {...register('checkbox', {required: true})}/>
                    {errors.checkbox && <div className="invalid-feedback d-block">Check checkbox should be</div>}
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="select">Chose select option</label><br/>
                    <select className="form-select form-select-sm" {...register('select', {required: true})}>
                        <option></option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    {errors.select && <div className="invalid-feedback d-block">Select should be selected</div>}
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="file">Upload file</label><br/>
                    <input type="file" className="form-control" id="file" {...register('file', {required: true})}/>
                    {errors.file && <div className="invalid-feedback d-block">File should be uploaded</div>}
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="radio1"
                           id="flexRadioDefault1" {...register('switcher', {required: true})}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Default radio 1
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="radio2"
                           id="flexRadioDefault2" {...register('switcher', {required: true})}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Default radio 2
                    </label>
                </div>
                {errors.switcher && <div className="invalid-feedback d-block">Switcher should be chosen</div>}
                <button type="submit" data-testid="submit" className="btn btn-primary">Submit</button>
            </form>
            {fromState.form.map((el, index) => <Result key={index} text={el.text} select={el.select}
                                                date={el.date} file={el.file} checkbox={el.checkbox}
                                                switcher={el.switcher}/>)}
        </div>
    );
}

export default Form;
