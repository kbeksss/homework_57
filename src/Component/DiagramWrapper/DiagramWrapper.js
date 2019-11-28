import React from 'react';
import './DiagramWrapper.css';
import Diagram from "./Diagram/Diagram";

const DiagramWrapper = (props) => {
    return(
        <div className='DiagramWrapper'>
            <div className='Legend EntLegend'>Entertainment</div>
            <div className='Legend CarLegend'>Car</div>
            <div className='Legend FoodLegend'>Food</div>
            <Diagram total={props.total} finances={props.finances}/>
        </div>
    );
};


export default DiagramWrapper;