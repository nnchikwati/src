import React from 'react';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactRotatingText from 'react-rotating-text'


const style={
    color: 'gray',
    fontSize: '50px'
}

const Home = () => {
    return (
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-white via-white to-gray-400 dark:from-black dark:via-black dark:to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-black  dark:text-white">
              Hello there!, I am Nigel
            </h2>
            <ReactRotatingText 
            style = {style}
            className="color:white"
            items = {['a Web Developer.','a Full Stack Developer.', 'a Computer Scientist.', 'a Tech Steward.']} />
            <p className="text-gray-500 py-4 max-w-md">
            Thanks for checking out my work.
            </p>
            
  
            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r 
                from-yellow-500 to-pink-500 cursor-pointer "
              >
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
  
          {/* <div>
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div> */}
        </div>
      </div>
    );
  };
  
  export default Home;

  