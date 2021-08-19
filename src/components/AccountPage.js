import React, { useState, useContext, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core";
import { Modal ,Button } from 'react-bootstrap';
import ProfileModal from '../modals/ProfileModal'

const user = {
    username: 'YNAVITA',
    firstname: 'Yair',
    lastname: 'Nava',
    email: 'ynavita@gmail.com',
    phone: '3115550123',
    ocupation: 'Web Developer',
    profileImageURL: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg'
}

const oldProfile = {
    name: 'dasdsad'
}
const AccountPage = props => {
    const [show, setShowModal] = useState(false);
    const handleCloseModal = (newProfile) => {
        if(newProfile){
            console.log(newProfile);
            // Update profile
        }
        setShowModal(false);
    }
    const handleShowModal = () => setShowModal(true);

    return (
        <>
            <div className="flex items-center w-100 justify-center mt-5">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-1/3 rounded-full mx-auto" src={user.profileImageURL}></img>
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{user.firstname} {user.lastname}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>{user.ocupation}</p>
                        </div>
                        <div className="flex items-center justify-center" >
                            <table className="text-xs my-3">
                                <tbody><tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Username</td>
                                    <td className="px-2 py-2">{user.username}</td>
                                </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td className="px-2 py-2">{user.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                        <td className="px-2 py-2">{user.phone}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center my-3">
                            <IconButton aria-label="edit" onClick={handleShowModal}>
                                <EditIcon/>
                            </IconButton>
                        </div>

                    </div>
                </div>
            </div>
            {/* Modal Edit Profile */}
            <Modal show={show} onHide={handleCloseModal}>
                <ProfileModal show={show} profile={oldProfile} onClose={(newProfile)=>handleCloseModal(newProfile)}/>
            </Modal>
        </>
    );
}

export default AccountPage;