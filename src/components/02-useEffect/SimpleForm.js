import React, {useEffect, useState} from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    const handleInputChange = ({target}) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

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
        <>
            <h4>My simple form1</h4>
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
            {
                name === '123' && <Message />
            }
        </>
    )
}
