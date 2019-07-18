import React, { Component } from 'react'

export default class Button extends Component {

    render() {
        return (
            <button className={this.props.title} onClick= {this.props.action}>{this.props.title}</button>
        )
    }
}