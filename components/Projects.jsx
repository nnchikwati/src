import React from "react";
import portfolio from "/assets/portfolioNigel.png";
import Gerald from '/assets/Geralds World.png';
import Ultimate from '/assets/Utimate-Drumset.png';
import Whack from '/assets/whack-a-mole.png';
import Invaders from '/assets/Game over space invaders.png';
import Visit from '/assets/Tourist website homepage.png';
import Robots from '/assets/Ricochet Robots.png';

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: Robots,
      gitLink: "https://github.com/nnchikwati",
      youTube: "https://www.youtube.com/channel/UCRKmviCRke5ksuZM0Fg4umw"
    },
    {
      id: 2,
      src: Gerald,
      gitLink: "https://github.com/nnchikwati",
      youTube: "https://www.youtube.com/channel/UCRKmviCRke5ksuZM0Fg4umw"
    },
    {
      id: 3,
      src: Ultimate,
      gitLink: "https://github.com/nnchikwati",
      youTube: "https://www.youtube.com/channel/UCRKmviCRke5ksuZM0Fg4umw"
    },
    {
      id: 4,
      src: Whack,
      gitLink: "https://github.com/nnchikwati",
      youTube: "https://www.youtube.com/channel/UCRKmviCRke5ksuZM0Fg4umw"
    },
    {
      id: 5,
      src: Visit,
      gitLink: "https://github.com/nnchikwati",
      youTube: "https://www.youtube.com/channel/UCRKmviCRke5ksuZM0Fg4umw"
    },
    {
      id: 6,
      src: Invaders,
      gitLink: "https://github.com/nnchikwati",
      youTube: "https://www.youtube.com/channel/UCRKmviCRke5ksuZM0Fg4umw"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-400 to-white dark:from-gray-800 dark:to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  dark:text-white">
            Projects
          </p>
          <p className="py-6  text-black dark:text-white ">Take a look at my projects</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, gitLink, youTube }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-3/4"
              />
              <div className="flex items-center justify-center">
                <a href={youTube} target='_blank' rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 dark:text-white ">
                  Youtube
                </button>
                </a>
                <a href={gitLink} target='_blank' rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 dark:text-white">
                  Github
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

