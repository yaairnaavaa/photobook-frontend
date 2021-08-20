import React, { useState, useContext, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core";
import { Modal, Button } from 'react-bootstrap';
import ProfileModal from '../modals/ProfileModal'
import UserService from '../services/UserService';
import swal from 'sweetalert';
const userNotPrifileImage = 'img/profile.jpg';

const AccountPage = props => {
    const [userProfile, setUserProfile] = useState(null);
    const [show, setShowModal] = useState(false);
    const [userId,setUserId] = useState(null);

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
        const loggedUserJSON = window.localStorage.getItem('loggedPhotobookAppUser');
        if (loggedUserJSON) {
            const userLocal = JSON.parse(loggedUserJSON);
            setUserId(userId => userLocal._id)
            // Obtener perfil de usuario
            UserService.getUserByUserName(userLocal.username).then(data => {
                setUserProfile(userProfile => data);
            });
            UserService.setToken(userLocal.token);
        }
    }

    const handleCloseModal = (newProfile) => {
        if (newProfile) {
            newProfile.userId = userId;
            // Update profile
            UserService.registerProfile(newProfile).then(data => {
                //Verificar si se pudo guardar el registro
                if (!data.message.msgError) {
                    swal({
                        title: data.message.msgBody,
                        text: "Profile is saved",
                        icon: "success",
                        button: "Accept"
                    }).then((value) => {
                        getProfile();
                    });
                } else {
                    swal({
                        title: data.message.msgBody,
                        icon: "warning",
                        button: "Accept"
                    });
                }
            });

        }
        setShowModal(false);
    }
    const handleShowModal = () => setShowModal(true);

    return (
        <>
            <div className="flex items-center w-100 justify-center mt-5">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-1/3 rounded-full mx-auto" src={userProfile ? (userProfile.profile ? (userProfile.profile.profileImageURL ? userProfile.profile.profileImageURL : userNotPrifileImage) : userNotPrifileImage) : userNotPrifileImage}></img>
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{userProfile ? (userProfile.profile ? (userProfile.profile.firstname ? userProfile.profile.firstname : '') : '') : ''} {userProfile ? (userProfile.profile ? (userProfile.profile.lastname ? userProfile.profile.lastname : '') : '') : ''}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>{userProfile ? (userProfile.profile ? (userProfile.profile.ocupation ? userProfile.profile.ocupation : '') : '') : ''}</p>
                        </div>
                        <div className="flex items-center justify-center" >
                            <table className="text-xs my-3">
                                <tbody><tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Username</td>
                                    <td className="px-2 py-2">{userProfile ? (userProfile.username ? userProfile.username.toUpperCase() : '') : ''}</td>
                                </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td className="px-2 py-2">{userProfile ? (userProfile.profile ? (userProfile.profile.email ? userProfile.profile.email : '') : '') : ''}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                        <td className="px-2 py-2">{userProfile ? (userProfile.profile ? (userProfile.profile.phone ? userProfile.profile.phone : '') : '') : ''}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center my-3">
                            <IconButton aria-label="edit" onClick={handleShowModal}>
                                <EditIcon />
                            </IconButton>
                        </div>

                    </div>
                </div>
            </div>
            {/* Modal Edit Profile */}
            <Modal show={show} onHide={handleCloseModal}>
                <ProfileModal show={show} profile={userProfile} onClose={(newProfile) => handleCloseModal(newProfile)} />
            </Modal>
        </>
    );
}

export default AccountPage;