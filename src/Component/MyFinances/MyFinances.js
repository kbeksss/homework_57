import React from 'react';
import Expense from "./Expense/Expense";

const MyFinances = (props) => {
    return (
        <div className='MyFinances'>
            {props.finances.map((expense) => (
                <Expense
                    key={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            ))}
        </div>

    );
};

export default MyFinances;