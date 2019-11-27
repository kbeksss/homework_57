import React from 'react';
import './MyForm.css';

const MyForm = (props) => {
    return (
        <form className='MyForm'>
            <input type="text"/>
            <input type="number"/>
            <span> KGS </span>
            <button type='submit' onClick={props.add}>Add</button>
        </form>
    );
};

export default MyForm;