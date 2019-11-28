import React from 'react';
import './MyForm.css';

const MyForm = (props) => {
    return (
        <form className='MyForm' onSubmit={props.submit}>
            <input type="text" value={props.name} onChange={props.changeName} required/>
            <input type="number" value={props.cost} onChange={props.changeCost} required/>
            <span> KGS </span>
            <div className='Radio' onChange={props.radio}>
                <label>
                    <input type="radio" name='select' value='entertainment' required/> Entertainment
                </label>
                <label>
                    <input type="radio" name='select' value='car'/> Car
                </label>
                <label>
                    <input type="radio" name='select' value='food'/> Food
                </label>
            </div>
            <button type='submit' className='Btn'>Add</button>
        </form>
    );
};

export default MyForm;