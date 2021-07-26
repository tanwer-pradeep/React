import React, { Component } from 'react'

 class Navbar extends Component {
    render() {
        const {title} = this.props
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className="fab fa-github"/>{title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
