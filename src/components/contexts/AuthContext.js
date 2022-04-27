// import React, { useContext, useState, useEffect } from 'react'
// import auth from '../../firebase'
// import Signup from '../Signup';

// const AuthContext=React.createContext()
// export function useAuth(){
//     return useContext(AuthContext);
// }
// export function Authprovider({children}) {
//     const [currentUser, setCurrentUser]= useState()
//     const [loading, setLoading]=useState(true)
//     function signup (email, password){
//         return auth.createUserWithEmailAndPassword(email, password)
//     }
//     useEffect(()=>{
//         setLoading(false)
//         const unsubscribe= auth.onAuthStateChanged(user =>{
//             setCurrentUser(user)
            
//     }, 
//     [])
//     return unsubscribe
//     })
//     const value ={
//         currentUser,
//         signup
//     }
//   return (
    
// <AuthContext.Provider value={value}> 
//     {children}
// </AuthContext.Provider>
//     )
// }
