import React from 'react';


const Contact = () => {
    return (
      <div
        name="contact"
        className="w-full h-screen bg-gradient-to-b from-white to-gray-400 p-4 text-white dark:from-black dark:to-gray-800"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <br></br>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500  text-black dark:text-white">
              Contact
            </p>
            <p className="py-6  text-black dark:text-white">Submit the form below to get in touch with me</p>
          </div>
  
          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/98d0d172-7023-4aef-9a56-d3f2b440de91"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-black dark:text-white  dark:border-white border-black"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="my-4 p-2 bg-transparent border-2 rounded-mdfocus:outline-none dark:border-white border-black text-black dark:text-white"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-mdfocus:outline-none  text-black dark:text-white  dark:border-white border-black"
              ></textarea>
  
              <button className=" text-white bg-gradient-to-r from-yellow-500  to-pink-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
