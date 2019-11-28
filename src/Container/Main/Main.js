import React, {Component} from 'react';
import MyForm from "../../Component/MyForm/MyForm";

import './Main.css';
import MyFinances from "../../Component/MyFinances/MyFinances";
import nanoid from 'nanoid';

class Main extends Component{
    state = {
        currentFinance: {name: 'Something', cost: 1000, type: 'Food'},
        finances: []
    };
    add = (event) => {
        event.preventDefault();
        let finances = [...this.state.finances];
        let currentF = {...this.state.currentFinance, id: nanoid()};
        finances.push(currentF);
        this.setState({finances});
    };
    changeName = (event) => {
        let currentFinance = {...this.state.currentFinance};
        currentFinance.name = event.target.value;
        this.setState({currentFinance});
    };
    changeCost = (event) => {
        let currentFinance = {...this.state.currentFinance};
        currentFinance.cost = parseInt(event.target.value);
        this.setState({currentFinance});
    };
    changeType = (event) => {
        let currentFinance = {...this.state.currentFinance};
        currentFinance.type = event.target.value;
        this.setState({currentFinance})
    };
    remove = (id) => {
        let finances = [...this.state.finances];
        let index = finances.findIndex(exp => exp.id === id);
        finances.splice(index, 1);
        this.setState({finances});
    };
    render() {
        return(
            <div className='Main'>
                <MyForm
                    name={this.state.currentFinance.name}
                    cost={this.state.currentFinance.cost}
                    changeName={(event) => this.changeName(event)}
                    changeCost={(event) => this.changeCost(event)}
                    radio={(event) => this.changeType(event)}
                    submit={(event) => this.add(event)}
                />
                <MyFinances
                    finances={this.state.finances}
                    remove={this.remove}
                />
            </div>
        );
    }
}

export default Main;