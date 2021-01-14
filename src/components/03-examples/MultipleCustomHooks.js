import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote, author} = !!data && data[0];

    return (
        <div>
            <h1>Custom Hooks!</h1>
            {
                loading?(

                    <div className="alert alert-primary" role="alert">
                        Loading...
                    </div>
                ): (
                    <blockquote className='blockquote text-right'>
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }

            <button className='btn btn-primary' onClick={increment}>Next</button>
        </div>
    );
}
