import React from 'react';
import profilePicture from '../data/profilePicture';
import ProfilePictureItem from './ProfilePictureItem';
import {useState} from 'react';

function ProfilePicture(){
    return(
        <div className=' rounded-full flex flex-col md:flex-row items-left justify-center'>
            <div className=' rounded-full '>
            {profilePicture.map(project =>(
                    <ProfilePictureItem
                        imgUrl={project.imgUrl}
                    /> 
                ))}
            </div>
        </div>
    )
}

export default ProfilePicture;