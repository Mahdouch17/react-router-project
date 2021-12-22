import React from 'react';

function ReturnButton(props) {
    return (
        <div>
            <button onClick={props.onClick}>return to movies</button>
        </div>
    );
}

export default ReturnButton;