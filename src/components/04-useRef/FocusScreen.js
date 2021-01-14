import React, {useRef} from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    const handleFocus = () => {
        inputRef.current.select();
    };

    return (
        <div>
           <h1>Focus Screen</h1>
           <hr />
           <input
                ref={inputRef}
                type='text'
                className='form-control'
           />
           <button
                className='btn btn-outline-primary'
                onClick={handleFocus}
           >
                Focus
           </button>
        </div>
    )
}
