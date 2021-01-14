import React, {memo} from 'react';

export const Small = memo(({value}) => {
    console.log('small is rendered!');
    return (
           <small>{value}</small> 
    );
});
