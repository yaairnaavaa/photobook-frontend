import React, { useState, useContext, useEffect } from 'react';

const ViewPhotoPage = props => {

    return (
            <div className="mt-5">
                <div className="bg-white p-0 m-0 lg:flex lg:rounded-lg">
                    {/* Show Image */}
                    <div className="lg:w-1/2">
                        <img src="https://res.cloudinary.com/photobookapp/image/upload/v1629363762/photobook/1_myyoxj.jpg" className="mx-auto w-full"></img>
                    </div>
                    {/* Show Comments */}
                    <div className="pt-1 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                        <div className="overflow-auto h-1/2 ...">
                            <div className="bg-gray-300 mb-1 rounded-lg p-3  flex flex-col justify-center items-center md:items-start">
                                <div className="flex flex-row justify-center mr-2">
                                    <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4" src="https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg"/>
                                    <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">ynavita</h3>
                                </div>
                                <p className="text-gray-600 text-lg text-center md:text-left m-0">This is a comment.</p>
                            </div>
                            <div className="bg-gray-300 mb-1 rounded-lg p-3  flex flex-col justify-center items-center md:items-start">
                                <div className="flex flex-row justify-center mr-2">
                                    <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4" src="https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg"/>
                                    <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">ynavita</h3>
                                </div>
                                <p className="text-gray-600 text-lg text-left md:text-left m-0">This is a comment fs f sdf sdf sdf fsdf af awe fdfsadfdsag r f r tretrds fgdgsdfg dgds gdf gd fgdfsgdsfgfsdgdf gdfs g dfs g dfg sdf gs dfg dsf g sdfg dsf g.</p>
                            </div>
                            <div className="bg-gray-300 mb-1 rounded-lg p-3  flex flex-col justify-center items-center md:items-start">
                                <div className="flex flex-row justify-center mr-2">
                                    <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4" src="https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg"/>
                                    <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">ynavita</h3>
                                </div>
                                <p className="text-gray-600 text-lg text-center md:text-left m-0">This is a comment.</p>
                            </div>
                            <div className="bg-gray-300 mb-1 rounded-lg p-3  flex flex-col justify-center items-center md:items-start">
                                <div className="flex flex-row justify-center mr-2">
                                    <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4" src="https://res.cloudinary.com/photobookapp/image/upload/v1629358286/photobook/14400975-FOTO_er8ywf.jpg"/>
                                    <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">ynavita</h3>
                                </div>
                                <p className="text-gray-600 text-lg text-left md:text-left m-0">This is a comment fs f sdf sdf sdf fsdf af awe fdfsadfdsag r f r tretrds fgdgsdfg dgds gdf gd fgdfsgdsfgfsdgdf gdfs g dfs g dfg sdf gs dfg dsf g sdfg dsf g.</p>
                            </div>
                        </div>
                        <section className="rounded-b-lg  mt-4 ">
                                <input name="comment" className="bg-gray-300 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Write a comment"/>
                        </section>
                    </div>
                </div>
            </div>
    );
}

export default ViewPhotoPage;
