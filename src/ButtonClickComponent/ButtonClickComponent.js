import React, { useState } from 'react';

export const ButtonClickComponent = () => {
    let [count, setCount] = useState(0);
    return (
        <React.Fragment>
            <h1>Current Count :</h1>
            <span data-test="count">{count}</span>
        </React.Fragment>
    )
}
