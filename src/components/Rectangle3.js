import React from 'react';
const Rectangle3 = props => {
    const {type, question, label, selected, isCorrect, position, onClick} = props;
    const status = selected ? 'on' : 'off';
    const theme = isCorrect ? '__correct' : '__incorrect';
    return (
        <div 
            className={`Rectangle-3 ${position} Rectangle-3${theme} ${status}`}
            onClick={() => {
                if (!selected) {
                    return onClick(question, type);
                }
              }
            }>
            <div className={`Label Label${theme}`}><span>{label}</span></div>
        </div>
    );
}

export default Rectangle3;