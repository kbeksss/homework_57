import React from 'react';
import './Diagram.css';

const Diagram = ({finances, total}) => {
    let entertainmentPer = finances.filter(exp => (exp.type === 'entertainment')).reduce((total, exp) => (total + exp.cost), 0) * 100 / total;
    let carPer = finances.filter(exp => (exp.type === 'car')).reduce((total, exp) => (total + exp.cost), 0) * 100 / total;
    let foodPer = finances.filter(exp => (exp.type === 'food')).reduce((total, exp) => (total + exp.cost), 0) * 100/ total;
    return total ? (
        <div className='Diagram'>
            <div className='Entertainment' style={{width: `${entertainmentPer}%`}}><i>{Math.trunc(entertainmentPer * 100)/100} %</i></div>
            <div className='Car' style={{width: `${carPer}%`}}><i>{Math.trunc(carPer * 100)/100} %</i></div>
            <div className='Food' style={{width: `${foodPer}%`}}><i>{Math.trunc(foodPer * 100)/100} %</i></div>
        </div>
    ) : null;
};

export default Diagram;