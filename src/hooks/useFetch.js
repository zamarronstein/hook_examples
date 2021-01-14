import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);

    useEffect(() => {

        return () => {
            isMounted.current = false;
        };
    }, []);

    const [state, setState] = useState({
        error: null,
        data: null,
        loading: true
    });

    useEffect(() => {

        setState({
            error: null,
            data: null,
            loading: true
        });

        fetch(url)
            .then(response => response.json())
            .then(data => {

                setState({
                    loading: false,
                    error: null,
                    data
                });
            });
    }, [url]);

    return state;
}
