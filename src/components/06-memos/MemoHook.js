
import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyProcess';
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effect.css';

export const MemoHook = () => {

    const {counter, increment} = useCounter(5000);

    const [show, setShow] = useState(true);

    /** Memoriza y solo ejecuta el heavyProcess siempre y cuanto cambie el counter */
    const memoProcesoPesado = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h3>MemoHook - Counter: <small>{counter}</small></h3>
            <hr/>
            { memoProcesoPesado }
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
