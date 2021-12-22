import React from 'react';

function AddButton(props) {
    return (
        <div>
          <button onClick={props.onClick}>Click to add movie</button>  
        </div>
    );
}

export default AddButton;