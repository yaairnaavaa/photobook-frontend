import React, {createContext,useState,useEffect} from 'react';
import UserService from '../services/UserService';

export const AuthContext = createContext();

export default ({ children })=>{
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        UserService.isAuthenticated().then(data =>{
            if(data.isAuthenticated){
                setUser(data.user);
                setIsAuthenticated(data.isAuthenticated);
                setIsLoaded(true);
            } else {
                const loggedUserJSON = window.localStorage.getItem('loggedPhotobookAppUser');
                if(loggedUserJSON){
                    const userLocal = JSON.parse(loggedUserJSON);
                    setUser(userLocal);
                    setIsAuthenticated(true);
                    setIsLoaded(true);
                } else {
                    setIsLoaded(true);
                }
            }
        });
    },[]);

    return (
        <div>
            {!isLoaded ? null : 
            <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}