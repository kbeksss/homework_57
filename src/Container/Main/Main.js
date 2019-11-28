import React, {Component} from 'react';
import MyForm from "../../Component/MyForm/MyForm";

import './Main.css';
import MyFinances from "../../Component/MyFinances/MyFinances";
import nanoid from 'nanoid';

class Main extends Component{
    state = {
        currentFinance: {name: 'Something', cost: '1000'},
        finances: []
    };
    add = (event) => {
        event.preventDefault();
        console.log('hello');
        let finances = [...this.state.finances];
        let currentF = {...this.state.currentFinance, id: nanoid()};
        finances.push(currentF);
        this.setState({finances});
        setTimeout(() => { //todo: temp console.log
            console.log(this.state.finances);
        }, 1000);
    };
    changeName = (event) => {
        let currentFinance = {...this.state.currentFinance};
        currentFinance.name = event.target.value;
        this.setState({currentFinance});
    };
    changeCost = (event) => {
        let currentFinance = {...this.state.currentFinance};
        currentFinance.cost = event.target.value;
        this.setState({currentFinance});
    };
    render() {
        return(
            <div className='Main'>
                <MyForm
                    name={this.state.currentFinance.name}
                    cost={this.state.currentFinance.cost}
                    changeName={(event) => this.changeName(event)}
                    changeCost={(event) => this.changeCost(event)}
                    submit={(event) => this.add(event)}
                />
                <MyFinances
                    finances={this.state.finances}
                />
            </div>
        );
    }
}

export default Main;