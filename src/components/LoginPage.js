import React, { useState, useContext, useEffect } from 'react';
import routes from '../helpers/routes';
import swal from 'sweetalert';
import UserService from '../services/UserService';
import {AuthContext} from '../context/AuthContext';
import { Redirect } from 'react-router-dom';

const LoginPage = props => {
    const [user,setUser] = useState({username:"",password:""});
    const authContext = useContext(AuthContext);

    const onChange = e =>{
        e.preventDefault();
        setUser({...user,[e.target.name]: e.target.value });
    }

    const login = e =>{
        e.preventDefault();

        if(user.username == '' || user.password == ''){
            swal({
                title: "There are empty fields",
                icon: "error",
                button: "Accept"
            });
            return;
        } else {
            UserService.login(user).then(data=>{
                console.log(data);
                if(data){
                    authContext.setUser(data.user);
                    authContext.setIsAuthenticated(data.isAuthenticated);
    
                    window.localStorage.setItem(
                        'loggedPhotobookAppUser', JSON.stringify(data.user)
                    )
    
                    UserService.setToken(data.user.token);
    
                    window.location.href = routes.photosWall;
                } else {
                    swal({
                        title: "Username or password are incorrect",
                        icon: "error"
                    });
                }
            });
        }
    }
    return (
        <div className="flex flex-1 items-center justify-center mt-5">
            <div className="bg-white rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                <form className="text-center">
                    <img src="/img/profileLogin.png" className="mx-auto w-1/3"></img>
                    <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                        Sign in
                    </h1>
                    <div className="py-2 text-left">
                        <input onChange={onChange} name="username" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Username" />
                    </div>
                    <div className="py-2 text-left">
                        <input onChange={onChange} name="password" type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Password" />
                    </div>
                    <div className="py-2">
                        <button onClick={login} className="border-2 border-gray-100 focus:outline-none bg-blue-500 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-blue-700">
                            Sign In
                        </button>
                    </div>
                </form>
                <div className="text-center mt-12">
                    <span>
                        Don't have an account?
                    </span>
                    <a href={routes.register} className="text-md text-blue-500 underline font-semibold hover:text-blue-800 ml-1">Create One</a>
                </div>
            </div>
    </div>
    );
}

export default LoginPage;