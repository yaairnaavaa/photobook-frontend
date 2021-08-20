import React, { useState, useContext, useEffect } from 'react';
import routes from '../helpers/routes';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const allPhotos = [
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    },
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    },
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    },
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    },
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    },
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    },
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    },
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    },
    {
        image: 'https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg',
    }
]
const MyPhotosPage = props => {
    const viewImage = (data) => {
        props.history.push('/view-photo/' + 'dasdasdad');
    }

    return (
        <div>
            <div className="sticky top-12 bg-white p-0 m-0 lg:flex lg:rounded-lg ...">
                <div className="lg:w-1/5">
                </div>
                <div className="lg:w-1/5">
                    <div className="py-2 text-left">
                        <input name="firstname" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Name" />
                    </div>
                    <div className="py-2 text-left">
                        <input name="firstname" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Description" />
                    </div>
                </div>
                <div className="lg:w-1/5">
                    <div className="flex w-full items-center justify-center bg-grey-lighter py-2">
                        <label className="w-64 flex flex-col items-center px-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                            <svg className="w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span className="text-base leading-normal">Select a file</span>
                            <input type='file' className="hidden" />
                        </label>
                    </div>
                </div>
                <div className="lg:w-1/5">
                    <div className="flex w-50 items-center justify-center bg-grey-lighter py-2">
                        <button className="border-2 border-gray-100 focus:outline-none bg-blue-500 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-blue-700">
                            Upload
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/5">
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 place-content-stretch ...">
                {allPhotos.map((user) => (
                    <div onClick={viewImage} className="bg-gray-100 m-auto w-96 h-64 mt-5 rounded-2xl cursor-pointer" style={{ backgroundImage: `url(${'https://res.cloudinary.com/photobookapp/image/upload/v1629363762/photobook/1_myyoxj.jpg'})`, backgroundSize: '100%' }}>
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
        </div>
    );
}

export default MyPhotosPage;