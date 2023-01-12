import React from 'react';
import ProfilePicture from './ProfilePicture';

const Intro = () => {
    return (
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-400 to-white text-black dark:from-gray-800 dark:to-black dark:text-white sm:text-xs"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-600 dark:border-gray-500 ">
              About Me 
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <ProfilePicture/>
          <p className="text-base mt-20 sm:text-xl ">
          Hello, my name is Nigel Chikwati and I am an experienced web developer. I have worked for Wood PLC as a GIS Web developer whereby I did full stack development. 
          During my time with Wood PLC I worked on multiple projects which exposed me to different frameworks. Moreover, 
          I also participated in testing and debugging code of fellow developers. 
          </p>
  
          <br />
  
          <p className="text-base sm:text-xl" >
          I finish my computer science degree at Memorial University in the fall of 2023.
          I am passionate about programming and learning new technologies.Furthermore, I enjoy building
          websites for peers and contributing to open source projects. When I am away from the computer screen ,
          I enjoy travelling and practising martial arts. 

          </p>
          <br />
        </div>
      </div>
    );
  };

export default Intro;