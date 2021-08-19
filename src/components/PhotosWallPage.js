import React, { useState, useContext, useEffect } from 'react';
import routes from '../helpers/routes';

const allPhotos = [
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    },
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    }
]
const PhotosWallPage = props => {

    const viewImage = (data) => {
        props.history.push('/view-photo/'+'dasdasdad');
    }

    return (
        <div className="grid grid-cols-3 gap-2 place-content-stretch ...">
            {allPhotos.map((user) => (
                <div onClick={viewImage} className="bg-gray-100 m-auto w-96 h-64 mt-5 rounded-2xl cursor-pointer" style={{ backgroundImage: `url(${'https://res.cloudinary.com/photobookapp/image/upload/v1629363762/photobook/1_myyoxj.jpg'})`, backgroundSize: '100%'}}>
                    <div className="flex flex-row items-end h-full w-full">
                        <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200 rounded-2xl">
                            <div className="inline-flex items-center">
                                <span className="capitalize font-base text-xs my-1 mr-1">Nombre Usuario Autor</span>
                            </div>
                            <div className="flex flex-row justify-between rounded-2xl">
                                <div className="flex flex-row">
                                    <div className="w-max inline-flex ml-4 items-center">
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span className="text-xs ml-1 antialiased">0</span>
                                    </div>
                                    <div className="w-max inline-flex ml-4 items-center">
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-xs ml-1 antialiased">12/08/2021</span>
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