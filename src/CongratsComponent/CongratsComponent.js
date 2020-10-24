import React from 'react';

export const CongratsComponent = (props) => {
    return (
        <h1 data-test="congrats">{props.success?'Congrats you have guessed the word':''}</h1>
    )
}