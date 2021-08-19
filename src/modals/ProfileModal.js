import React, { useState, useContext, useEffect } from 'react';

const ProfileModal = props => {
    const [profile,setProfile] = useState({firstname:"",lastname:"",email:"",phone:"",ocupation:""});

    if(!props.show){
        return null;
    }

    const onChange = e =>{
        e.preventDefault();
        setProfile({...profile,[e.target.name]: e.target.value });
    }

    const updateProfile = e =>{
        e.preventDefault();
        props.onClose(profile);
    }
    return (
            <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                <form className="text-center">
                    <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                        Update Profile
                    </h1>
                    <div className="py-2 text-left">
                        <input onChange={onChange} name="firstname" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="First Name" />
                    </div>
                    <div className="py-2 text-left">
                        <input onChange={onChange} name="lastname" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Last Name" />
                    </div>
                    <div className="py-2 text-left">
                        <input onChange={onChange} name="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Email" />
                    </div>
                    <div className="py-2 text-left">
                        <input onChange={onChange} name="phone" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Phone" />
                    </div>
                    <div className="py-2 text-left">
                        <input onChange={onChange} name="ocupation" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Ocupation" />
                    </div>
                    <div className="py-2">
                        <button onClick={updateProfile} className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-blue-700">
                            Update
                        </button>
                    </div>
                </form>
            </div>
    );
}

export default ProfileModal;