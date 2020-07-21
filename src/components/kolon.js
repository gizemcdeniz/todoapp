import React, { Component } from 'react'

class Kolon extends Component {
    constructor(props){
        super(props)
        this.state = {value: props.value, columnValue: props.columnValue}
    }

    

    render() {
        return (
            <td className="valueEnter">
                {this.state.value}
                {this.state.columnValue}
            </td>
        )
    }
}

export default Kolon;
