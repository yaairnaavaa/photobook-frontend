// Imports
import axios from "axios";

// Local
const apiUrl = 'http://localhost:5000';

// Token de usuario
let token = null;

export default {
    // Login
    login : user =>{
        return axios.post(apiUrl+'/user/login',user)
        .then(res => {
            if(res.status !== 401)
                return res.data;
            else
                return { isAuthenticated : false, user : {username : "",role : ""}};
        })
        .catch((error) => {
            console.log(error);
        });
    },
    // Register new user
    register : user =>{
        return axios.post(apiUrl+'/user/new',user)
        .then(res => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
    // Get all users
    getAllUsers : () =>{
        return axios.get(apiUrl+'/user/getAll',{
            headers: {
                'authorization': token
            }
        })
        .then(res => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
    // Delete user by userId
    deleteUser: userId =>{
        return axios.delete(apiUrl+'/user/delete/'+userId,{
            headers: {
                'authorization': token
            }
        })
        .then(res => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
    // Logout
    logout : ()=>{
        return fetch(apiUrl+'/user/logout')
            .then(res => res.json())
            .then(data => data);
    },
    // Is Authenticated
    isAuthenticated : ()=>{
        return fetch(apiUrl+'/user/authenticated').then(res=>{
            if(res.status !== 401) {
                return res.json().then(data => data);
            } else{
                return { isAuthenticated : false, user : {username : "",role : ""}};
            }
        });
    },
    // Save image
    saveImage : photo =>{
        return axios.post(apiUrl+'/image/saveImage',photo,{
            headers: {
                'authorization': token
            }
        })
        .then(res => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
    // Get all images
    getAllImages : () =>{
        return axios.get(apiUrl+'/image/getImages')
        .then(res => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
    // Get all user images
    getUserImages : (userId) =>{
        return axios.get(apiUrl+'/image/getUserImages/'+userId,{
            headers: {
                'authorization': token
            }
        })
        .then(res => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
    // Get image by id
    getImageById : imageId =>{
        return axios.get(apiUrl+'/image/getImage/'+imageId)
        .then(res => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
    setToken : (newToken) => {
        return token = `Bearer ${newToken}`;
    }
}