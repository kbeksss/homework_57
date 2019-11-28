import React from 'react';
import './Diagram.css';

const Diagram = (props) => {
    let total = props.total;
    let finances = props.finances;
    let entertainmentPer = finances.filter(exp => (exp.type === 'entertainment')).reduce((total, exp) => (total + exp.cost), 0) * 100 / total;
    let carPer = finances.filter(exp => (exp.type === 'car')).reduce((total, exp) => (total + exp.cost), 0) * 100 / total;
    let foodPer = finances.filter(exp => (exp.type === 'food')).reduce((total, exp) => (total + exp.cost), 0) * 100 / total;
    return(
        <div className='Diagram'>
            <div className='Entertainment' style={{width: `${entertainmentPer}%`}}/>
            <div className='Car' style={{width: `${carPer}%`}}/>
            <div className='Food' style={{width: `${foodPer}%`}}/>
        </div>
    );
};

export default Diagram;