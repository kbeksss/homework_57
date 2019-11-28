import React from 'react';
import Expense from "./Expense/Expense";
import './MyFinances.css';

const MyFinances = (props) => {
    const totalSpent = props.finances.reduce((total, exp) => (total + exp.cost), 0);
    return (
        <div className='MyFinances'>
            {props.finances.map((expense) => (
                <Expense
                    key={expense.id}
                    name={expense.name}
                    type={expense.type}
                    cost={expense.cost}
                    remove={() => props.remove(expense.id)}
                />
            ))}
            <div className='Total'>Total spent: <b>{totalSpent}</b> <i>KGS</i></div>
        </div>

    );
};

export default MyFinances;