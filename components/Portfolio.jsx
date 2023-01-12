import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio(){
    
    return(
        <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-black dark:text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 justify-center items-center">
            Projects
          </p>
          <p className="py-6  text-black dark:text-white">Check out some of my work right here</p>
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0"> */}
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolio.map(project =>(
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
    )
}

export default Portfolio;