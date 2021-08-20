import React, { useState, useContext, useEffect } from 'react';
import UserService from '../services/UserService';
import { useParams } from "react-router";
import ScrollableFeed from 'react-scrollable-feed';
import routes from '../helpers/routes';
const userNotPrifileImage = 'img/profile.jpg';

const ViewPhotoPage = props => {
    const [image, setImage] = useState([]);
    const imageId = useParams().photoId;
    const [allComments, setAllComments] = useState([]);
    const [comment,setComment] = useState({newComment:""});
    const [userId,setUserId] = useState(null);
    const commentInput = React.createRef();

    useEffect(() => {
        getImage();
    }, []);

    const getImage = async () => {
        const loggedUserJSON = window.localStorage.getItem('loggedPhotobookAppUser');
        if(loggedUserJSON){
            const userLocal = JSON.parse(loggedUserJSON);
            UserService.setToken(userLocal.token);
            setUserId(userId => userLocal._id)
        }
        
        UserService.getImageById(imageId).then(data => {
            setImage(image => data[0]);
            setAllComments(allComments => data[0].coments);
        });
    }
    
    const handleNewComment = (e) =>{ 
        e.preventDefault();
        setComment({...comment,[e.target.name]: e.target.value });
    }

    const handleKeyDown = (e) => {
        if(comment.newComment.trim() != ''){
            if (e.key === 'Enter') {
                commentInput.current.value = '';

                const newComment = {
                    imgId : imageId,
                    comment : {
                        user : userId,
                        comment : comment
                    }
                }
                // Save comment
                UserService.saveComment(newComment).then(data => {
                    setComment({...comment,newComment: '' });
                    getImage();            
                });
            }
        }
    }

    const commentsList = () => {
        return (
            <>
                {allComments.length > 0 ? allComments.map((comment) => (
                    <div key={comment._id} className="bg-gray-300 mb-1 rounded-lg p-3  flex flex-col justify-center items-center md:items-start">
                        <div className="flex flex-row justify-center mr-2">
                            <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4" src={comment.user.profile ? (comment.user.profile.profileImageURL ? comment.user.profile.profileImageURL : userNotPrifileImage) : userNotPrifileImage} />
                            <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">{comment.user.username.toUpperCase()}</h3>
                        </div>
                        <p className="text-gray-600 text-lg text-center md:text-left m-0">{comment.comment}</p>
                    </div>
                )) : null}
            </>
        );
    }

    if (image.user) {
        return (
            <div className="mt-5">
                <div className="bg-white p-0 m-0 lg:flex lg:rounded-lg">
                    {/* Show Image */}
                    <div className="lg:w-1/2">
                        <img src={image.imageURL} className="mx-auto w-full"></img>
                    </div>
                    {/* Show Comments */}
                    <div className="pt-1 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                        <div className="overflow-scroll max-h-96	 bg-gray-300 rounded-lg ...">
                            <ScrollableFeed>
                                {commentsList()}    
                            </ScrollableFeed>
                        </div>
                        <section className="rounded-b-lg  mt-4 ">
                            { 
                            userId ? 
                                <input name="newComment" ref = { commentInput } onChange={handleNewComment} onKeyDown={handleKeyDown} className="bg-gray-300 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-blue-700 " placeholder="Write a comment" /> 
                            : 
                            <div className="text-center mt-12">
                                <span>
                                    Login to comment
                                </span>
                                <a href={routes.login} className="text-md text-blue-600 underline font-semibold hover:text-blue-800 ml-1">Login</a>
                            </div>
                            }
                        </section>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="divContentCenter">

            </div>
        );
    }
}

export default ViewPhotoPage;
