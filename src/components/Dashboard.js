import React, {Component} from 'react';
import Kolon from './kolon';


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {columnList: null, inputValue: null}
        this.updateInput = this.updateInput.bind(this);

        this.array = []
    }

    createColumns = () => {
        this.array.push(<Kolon value={this.state.inputValue}/>)
        this.setState({columnList: this.array})
        console.log(this.state.columnList)
    }

    updateInput = (event) => {
       this.setState({inputValue: event.target.value})
    }

    render () {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.updateInput} type="text"/>
                <button type="button" onClick={this.createColumns}>Add Coloumn</button>
                <table>
                    <tr>
                    {this.state.columnList}
                    </tr>
                </table>
            </div>
        );
    }

}

export default Dashboard;