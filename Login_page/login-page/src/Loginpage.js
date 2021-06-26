import React from 'react'
import './App.css'


export default function Loginpage() {
    // constructor(props)
    // {
    //     super(props);
    //     this.state={
    //         email:"",
    //         password:""
    //     }
    // }


    function handelchange(){
    
    }
    return (
        <>
            {
                <div className="main">
                    <div className="login-btn">
                        <button className="loginbtn" onClick={()=> handelchange()}>Login</button>

                    </div>
                    <div className="login-form" hidden>
                        <h3>Email</h3>
                        <input className="input" type="text/email" placeholder="Email" value={this.state.email}></input>

                        <h3>Password</h3>
                        <input className="input" type="password" placeholder="Password" value={this.state.password}></input>
                        <br/>
                        <button className='submit'>Submit</button>
                    </div>
                </div>
            }


        </>
    )
}
