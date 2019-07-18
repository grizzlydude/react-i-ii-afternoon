import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        return (
            <div>
                <h1>
                    First: {this.props.person.name.first}
                </h1>
                <h1>
                    Last: {this.props.person.name.last}
                </h1>
                <h1>
                    City: {this.props.person.city}
                </h1>
                <h1>
                    Country: {this.props.person.country}
                </h1>
                <h1>
                    Employer: {this.props.person.employer}
                </h1>
                <h1>
                    Title: {this.props.person.title}
                </h1>
                <h1>
                    Favorite Movie: {this.props.person.favoriteMovies}
                </h1>
            </div>
        )
    }
}