import React from 'react';
import './Expense.css';

const Expense = (props) => {
    return (
        <div className='Expense'>
            <span>{props.name}</span>
            <span>{props.cost}</span>
            <span> KGS </span>
            <span className='Remover' onClick={props.remove}>X</span>
        </div>

    );
};

export default Expense;