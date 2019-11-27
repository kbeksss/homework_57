import React, {Component} from 'react';
import MyForm from "../../Component/MyForm/MyForm";

class Main extends Component{
    state = {
        finances: []
    };
    render() {
        return(
            <div className='Main'>
                <MyForm/>
            </div>
        );
    }
}

export default Main;