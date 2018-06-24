import React from 'react';
import Rectangle3 from './Rectangle3'
const Rectangle5 = props => {
    const { type, question, isCorrect, onClick } = props;
    return (
        <div className='Rectangle-5'>
            <Rectangle3
                label={question.left.label}
                position='left'
                isCorrect={isCorrect}
                selected={question.left.selected}
                question={question}
                onClick={onClick}
                type={type}
            />
            <Rectangle3
                label={question.right.label}
                position='right'
                isCorrect={isCorrect}
                selected={question.right.selected}
                question={question}
                onClick={onClick}
                type={type}
            />
        </div>
    ); 
}

export default Rectangle5;