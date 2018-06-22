import React from 'react';
const Mask = props => {
    const { isCorrect } = props;
    const theme = isCorrect ? '__correct' : '__incorrect';
    return (
        <div className={`Mask Mask${theme}`}>
            {props.children}
        </div>
    );
}

export default Mask;