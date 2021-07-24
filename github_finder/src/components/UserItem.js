import React, { Component } from 'react'

class UserItem extends Component {

    state ={
        img_url :`https://avatars.githubusercontent.com/u/63426820?v=4`,
        username : 'pradeep'
    }

    render() {
        {function call(){
            fetch("https://api.github.com/users/pradeep")
            .then(res => {
                console.log(res)
            })
        }
    call()}
        return (
            <div className="card text-center">
                <img src={this.state.img_url} alt="" 
                className="round-img"
                style={{width:'60px'}}/>

                <h3>User Item</h3>
            </div>
        )
    }
}

export default UserItem
