import React, {Component} from 'react';
import Kolon from './kolon';
import Workload from './Workload.js';


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {columnList: null, inputValue: null, inputValue2: null, cardValue: null}
        this.updateInput = this.updateInput.bind(this);
        this.array = []
        this.work = []
        
    }

    createColumns = () => {
        this.array.push(<Kolon value={this.state.inputValue} columnValue={null} />)
        this.setState({columnList: this.array})
        console.log(this.array)
    }

    updateInput = (event) => {
       this.setState({inputValue: event.target.value})
    }

    updateInput2 = (event) => {
        this.setState({inputValue2: event.target.value})
     }



   addedValue = () =>{

        this.array.forEach(value => {
            if(value.props.value == this.state.inputValue) {
                const workloadComponent = <Workload value = {this.state.inputValue2}/>
            }
        })
        //this.setState({cardValue: this.array})
        console.log(this.array)
   }

    render () {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.updateInput} type="text"/>
                <input value={this.state.inputValue2} onChange={this.updateInput2} type="text"/>
                <button type="button" onClick={this.createColumns}>Add Column</button>
                <button type="button" onClick={this.addedValue}>Add Card</button>
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