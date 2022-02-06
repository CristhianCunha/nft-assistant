import {createContext, useState }from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider(props){
    const [user, setUser] = useState()
    const [userData, setUserData] = useState({})
    return(
        <AuthContext.Provider value={{user, setUser, userData, setUserData}}>
            {props.children}
        </AuthContext.Provider>
    )
}