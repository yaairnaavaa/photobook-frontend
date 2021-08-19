import React, { useState, useContext, useEffect } from 'react';
import moment from "moment";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import swal from 'sweetalert';
import {
    Card,
    CardActions,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
    Button,
    Menu,
    MenuItem,
    IconButton,
    Container,
    Grid,
    Typography
  } from "@material-ui/core";
  
  const users = [
    {
      firstname: 'Jane',
      lastname: 'Cooper',
      username: 'JC321',
      ocupation: 'Web Development',
      email: 'jane.cooper@example.com',
      phone: '550123',
      dateCreate: new Date(),
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    }
]
const UsersPage = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);


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
            text: "Once deleted you will lose access to the platform, profile information and stored images",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancel",'Delete']
        })
        .then((willDelete) => {
            if (willDelete) {
                console.log(data);
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
                                {users.map((user) => (
                                    <tr key={user.email}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={user.image} alt="" />
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
                                                <MenuItem onClick={() => viewProfile(user)}>Show profile</MenuItem>
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