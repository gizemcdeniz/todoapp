import React, { Component } from 'react'

class Kolon extends Component {
    constructor(props){
        super(props)
        this.state = {value: props.value}
    }
    render() {
        return (
            <td>
                {this.state.value}
            </td>
        )
    }
}

export default Kolon
