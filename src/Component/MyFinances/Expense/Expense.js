import React from 'react';

const Expense = (props) => {
    return (
        <div className='Expense'>
            <span>{props.name}</span>
            <span>{props.cost}</span>
            <span className='Remover'>X</span>
        </div>

    );
};

export default Expense;