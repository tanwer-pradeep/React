import React, {useState,useContext,useEffect} from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext();

function AuthProvider() {
    const[currentUser,setCurrentUser] = useState();
    const[loading, setLoading] = useState(true);

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email, password){
        return 
    }
    return (
        <div>
            
        </div>
    )
}

export default AuthProvider
