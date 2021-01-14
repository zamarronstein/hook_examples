import React, {useEffect} from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';

export const FormWithCustomeHook = () => {

    const [formState, handleInputChange, handleSubmit] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formState;

    useEffect(() => {

        console.log('change on password!');
    }, [password])

    /*
    useEffect(() => {

        console.log('hi!');
    }, []);

    useEffect(() => {

        console.log('formState has changed!');
    }, [formState]);

    useEffect(() => {

        console.log('email has Changed!')
    }, [email]);
    */

    return (
        <form onSubmit={handleSubmit}>
            <h4>Form with custom hook!</h4>
            <hr/>
            <div className='form-group'>
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Your name Here!'
                    autoComplete= 'off'
                    value={name}
                    onChange={handleInputChange}
                 />
            </div>
            <div className='form-group'>
                <input 
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='zamarronstein@gmail.com'
                    autoComplete= 'off'
                    value={email}
                    onChange={handleInputChange}
                 />
            </div>
            <div className='form-group'>
                <input 
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='*******'
                    autoComplete= 'off'
                    value={password}
                    onChange={handleInputChange}
                 />
            </div>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-primary'> Save </button>
            </div>
        </form>
    )
}
