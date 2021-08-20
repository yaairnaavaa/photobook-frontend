import React, { useState, useContext, useEffect } from 'react';
import routes from '../helpers/routes';
import UserService from '../services/UserService';
import moment from "moment";


const PhotosWallPage = props => {
    const [allImages, setAllImages] = useState([]);

    useEffect(() => {
        getImages();
    },[]);
    
    const getImages = async () => {
        UserService.getAllImages().then(data=>{
            setAllImages(allImages =>  data);
        });
    }

    const viewImage = (data) => {
        props.history.push('/view-photo/'+data._id);
    }

    return (
        <div className="grid grid-cols-3 gap-2 place-content-stretch ...">
            {allImages.map((photo) => (
                <div key={photo._id} onClick={() => viewImage(photo)} className="bg-gray-100 m-auto w-96 h-64 mt-5 rounded-2xl cursor-pointer" style={{ backgroundImage: `url(${photo.imageURL})`, backgroundSize: '100%'}}>
                    <div className="flex flex-row items-end h-full w-full">
                        <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200 rounded-2xl">
                            <div className="inline-flex items-center">
                                <span className="capitalize font-base text-xs my-1 mr-1">{photo.user.username.toUpperCase()}</span>
                            </div>
                            <div className="flex flex-row justify-between rounded-2xl">
                                <div className="flex flex-row">
                                    <div className="w-max inline-flex ml-4 items-center">
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span className="text-xs ml-1 antialiased">{photo.coments.length}</span>
                                    </div>
                                    <div className="w-max inline-flex ml-4 items-center">
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-xs ml-1 antialiased">{moment(photo.dateCreate).format("DD/MM/YYYY")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PhotosWallPage;