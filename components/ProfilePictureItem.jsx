import React from 'react';

function ProfilePictureItem({imgUrl}){
    return( 
        <div className='overflow-hidden '>
        <img
            src = {imgUrl}
            //alt="portfolio"
            //className = " rounded-full w-full h-36 md:h-48 object-cover cursor-pointer"
            className='h-72 w-auto flex items-center justify-center'
        />
    </div>
    )
}

export default ProfilePictureItem;