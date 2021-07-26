import React from 'react'

 function Navbar (props) {
   
        const {title} = props
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className="fab fa-github"/>{title}
                </h1>
            </nav>
        )
    
}

export default Navbar
