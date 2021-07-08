import React, {useState,useContext,useEffect, Children} from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext();

function AuthProvider() {
    const[currentUser,setCurrentUser] = useState();
    const[loading, setLoading] = useState(true);

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email, password){
        return signInWithEmailAndPassword(email, password);
    }

    function logout(){
        return auth.signOut();
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            setLoading(false);
        })
    },[])

    const value = {
        currentUser,
        login,
        signup,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && Children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
