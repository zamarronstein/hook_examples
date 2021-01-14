import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effect.css';
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter(10);

    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter: <Small value={counter} /></h1>
            <hr/>
            <button 
                className='btn btn-primary'
                onClick={increment}
            >
              Increment
            </button>

            <button
                className='btn btn-outline-primary' 
                    onClick={()=>{ setShow(!show) }}
            >
                Hide/Show {JSON.stringify(show)}
            </button>

        </div>
    )
}
