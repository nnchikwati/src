import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SLinks from './components/SocialLinks';
import Tools from './components/Tools.jsx'
import Projects from './components/Projects';


function App() {
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="white"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

	const slides = [
		{
			img: '/assets/kari-shea-1SAnrIxw5OY-unsplash.jpg'
		},
		{
			img: '/assets/alex-knight-2EJCSULRwC8-unsplash.jpg'
		},
		{
			img: '/assets/possessed-photography-jIBMSMs4_kA-unsplash.jpg'
		},
		{
			img: '/assets/yuyeung-lau-dp9Jrww_BRs-unsplash.jpg'
		}
	];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
	console.log(currentIndex)
	const isFirstSlide = currentIndex === 0;
	const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
	setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
	const isLastSlide = currentIndex === slides.length - 1 ;
	const newIndex = isLastSlide ? 0 : currentIndex + 1  ;
	setCurrentIndex(newIndex);
  }
  return (
    <>
	<Navbar/>
	<div>
	<button
			type="button"
			onClick={handleThemeSwitch}
			className="fixed .p-2 z-10 right-0 top-20 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md"
		>
			{theme === 'dark' ? sun : moon}
		</button>
	</div>
	<Home/>
	<Intro/>
	<Tools/>
	<Projects/>
	<Contact/>
	<SLinks/>
    <Footer/>
    </>
  )
}

export default App
