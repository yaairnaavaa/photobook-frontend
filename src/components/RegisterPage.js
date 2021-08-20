import React, { useState, useContext, useEffect } from 'react';
import routes from '../helpers/routes';
import swal from 'sweetalert';
import UserService from '../services/UserService';

const RegisterPage = props => {
    const [user,setUser] = useState({username:"",password1:"",password2:""});

    const onChange = e =>{
        e.preventDefault();
        setUser({...user,[e.target.name]: e.target.value });
    }

    const register = e =>{
        e.preventDefault();

        if(user.username == '' || user.password1 == '' || user.password2 == ''){
            swal({
                title: "There are empty fields",
                icon: "error",
                button: "Accept"
            });
            return;
        }

        if(user.password1 === user.password2){
            const newUser = {
                username : user.username,
                password : user.password1
            }

            UserService.register(newUser).then(data=>{
                //Verificar si se pudo guardar el registro
                if(!data.message.msgError){
                    swal({
                        title: data.message.msgBody,
                        text: "Login to continue",
                        icon: "success",
                        button: "Accept"
                    }).then((value) => {
                        props.history.push(routes.login);
                    });
                } else {
                    swal({
                        title: data.message.msgBody,
                        icon: "warning",
                        button: "Aceptar"
                    });
                }
            });
        } else {
            swal({
                title: "Passwords do not match",
                icon: "error",
                button: "Accept"
            });
            return;
        }
    }

    return (
        <div className="flex flex-1 items-center justify-center mt-5">
            <div className="bg-white rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                <form className="text-center">
                    <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                        Create an Account
                    </h1>
                    <div className="py-2 text-left">
                        <input onChange={onChange} name="username" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Username" />
                    </div>
                    <div className="py-2 text-left">
                        <input onChange={onChange} name="password1" type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Password" />
                    </div>
                    <div className="py-2 text-left">
                        <input onChange={onChange} name="password2" type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Confirm Password" />
                    </div>
                    <div className="py-2">
                        <button onClick={register} className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-blue-700">
                            Register
                        </button>
                    </div>
                </form>
                <div className="text-center mt-12">
                    <span>
                        Already have an account?
                    </span>
                    <a href={routes.login} className="text-md text-blue-600 underline font-semibold hover:text-blue-800 ml-1">Login</a>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;