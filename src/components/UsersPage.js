import React, { useState, useContext, useEffect } from 'react';
import moment from "moment";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import swal from 'sweetalert';
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import UserService from '../services/UserService';
const userNotPrifileImage = 'img/profile.jpg';

const UsersPage = props => {
    const [allUsers, setUsersToList] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        getUsers();
    },[]);

    const getUsers = async () => {
        const loggedUserJSON = window.localStorage.getItem('loggedPhotobookAppUser');
        if(loggedUserJSON){
            const userLocal = JSON.parse(loggedUserJSON);
            UserService.setToken(userLocal.token);
            UserService.getAllUsers().then(data=>{
                setUsersToList(allUsers =>  data);
            });
        }  
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const viewProfile = (data) => {
        handleClose();
        console.log("User Profile");
        console.log(data);
    }

    const deleteUser = (data) => {
        handleClose();
        swal({
            title: "Are you sure to delete the user "+data.username+"?",
            text: "Once deleted, access to the platform will be lost",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancel",'Delete']
        })
        .then((willDelete) => {
            if (willDelete) {
                UserService.deleteUser(data._id).then(data=>{
                    if(!data.message.msgError){
                        // Eliminado con éxito
                        swal({
                            title: data.message.msgBody,
                            icon: "success",
                            button: "Accept"
                        }).then((value) => {
                            getUsers();
                        });
                    } else {
                        // No se pudo eliminar
                        swal({
                            title: data.message.msgBody,
                            icon: "error",
                            button: "Accept"
                        });
                    }
                });
            }
        });
    }

    return (
        <div className="flex flex-col w-4/5 mx-auto mt-5">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        USER
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        USERNAME
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        EMAIL
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        CREATE DATE
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {allUsers.map((user) => (
                                    <tr key={user._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={user.profile ? (user.profile.profileImageURL ? user.profile.profileImageURL : userNotPrifileImage) : userNotPrifileImage} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{user.firstname} {user.lastname}</div>
                                                    <div className="text-sm text-gray-500">{user.phone}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.username}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.email}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.dateCreate ? moment(user.dateCreate).format("DD/MM/YYYY") : ''}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <IconButton aria-label="delete" onClick={handleClick}>
                                                <MoreVertIcon />
                                            </IconButton>
                                            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                                <MenuItem onClick={() => deleteUser(user)}>Delete account</MenuItem>
                                            </Menu>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsersPage;