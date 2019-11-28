import React from 'react';
import './MyForm.css';

const MyForm = (props) => {
    return (
        <form className='MyForm' onSubmit={props.submit}>
            <input type="text" value={props.name} onChange={props.changeName}/>
            <input type="number" value={props.cost} onChange={props.changeCost}/>
            <span> KGS </span>
            <button type='submit' className='Btn'>Add</button>
        </form>
    );
};

export default MyForm;