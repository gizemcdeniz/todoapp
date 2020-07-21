import React, { Component } from 'react'


export default class Workload extends Component {
    render() {
        return (
            <div>
                <input type="text"/>
                {this.state.cardValue}
            </div>
        )
    }
}
