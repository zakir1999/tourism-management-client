import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";
import Countries from "./Countries";
import { MdHomeWork } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
    const loadedTourists = useLoaderData();
  const [tourists,setTourists] = useState(loadedTourists);

  const[countries,setCountries] = useState([])
  useEffect(() =>{
    fetch('https://tourism-management-server-three.vercel.app/countries')
    .then(res => res.json())
    .then(data =>{
      setCountries(data);
    })
  },[])




    return (
        <div>
            {/* <h2>Tourists Length:{tourists.length}</h2> */}
            {/* banner */}

            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[500px] rounded-2xl" style={{ backgroundImage: 'url("https://i.ibb.co/njBprQ3/beautiful-sunrise-fishing-dip-nets-pakpra-phatthalung-thailand.jpg")', backgroundSize: 'cover' }}>
    <div className="text-center lg:text-5xl text-base md:p-15  md:pt-20">
    <h1 className="text-purple-500">Southeast Asia: A vibrant region of diverse cultures, lush landscapes, rich history, and bustling cities, offering unforgettable experiences for travelers.
    </h1>
    <button className="btn  btn-secondary">See More</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[500px] rounded-2xl" style={{ backgroundImage: 'url("https://i.ibb.co/86cZCWY/pileh-blue-lagoon-phi-phi-island-thailand.jpg")', backgroundSize: 'cover' }}>
  <div className="text-center lg:text-5xl text-base md:p-15  md:pt-20">
    <h1 className="text-purple-500">Southeast Asia: A vibrant region of diverse cultures, lush landscapes, rich history, and bustling cities, offering unforgettable experiences for travelers.
    </h1>
    <button className="btn  btn-secondary">See More</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[500px] rounded-2xl" style={{ backgroundImage: 'url("https://i.ibb.co/ZYdmcr9/bali-pagoda-indonesia.jpg")', backgroundSize: 'cover' }}>
  <div className="text-center  md:p-15 lg:text-5xl text-base  md:pt-20">
    <h1 className="text-purple-500">Southeast Asia: A vibrant region of diverse cultures, lush landscapes, rich history, and bustling cities, offering unforgettable experiences for travelers.
    </h1>
    <button className="btn  btn-secondary">See More</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-[500px] rounded-2xl" style={{ backgroundImage: 'url("https://i.ibb.co/GMSnTBy/firework-display-singapore.jpg")', backgroundSize: 'cover' }}>
  <div className="text-center lg:text-5xl text-base md:p-15  md:pt-20">
    <h1 className="text-purple-500">Southeast Asia: A vibrant region of diverse cultures, lush landscapes, rich history, and bustling cities, offering unforgettable experiences for travelers.
    </h1>
    <button className="btn  btn-secondary">See More</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>







            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4'>
      {
         tourists.slice(0,6).map(tourist => <TouristCard key={tourist._id} tourist={tourist} tourists={tourists} setTourists={setTourists}></TouristCard>)
      }
      </div>
      <p className="text-4xl text-center mt-10">
      <span style={{ color: 'purple', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['COUNTRY SECTION']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        
        {
          countries.map(country =><Countries key={country._id} country={country}></Countries>)
        }
      </div>
          {/* features */}
          <div>


          <section className="dark:bg-gray-100 mt-10 dark:text-gray-800">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
      <span style={{ color: 'purple', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Features of TouristTrekker']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      
      </h2>
		
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Destination Pages</h4>
							<p className="mt-2 dark:text-gray-600">Create dedicated pages for each destination, providing comprehensive information such as attractions, accommodations, dining options, local culture, and travel tips. </p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Multilingual Support</h4>
							<p className="mt-2 dark:text-gray-600">Cater to international travelers by offering multilingual support, allowing users to access content in their preferred language. Provide translations for key information and communication channels.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Customized Travel Guides and Itineraries</h4>
							<p className="mt-2 dark:text-gray-600">Offer personalized travel guides and suggested itineraries based on different interests, budgets, and travel styles. Provide insider tips, off-the-beaten-path recommendations, and downloadable itineraries for convenience.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://i.ibb.co/dcJ973J/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Accessibility Features</h4>
								<p className="mt-2 dark:text-gray-600">Ensure the website complies with accessibility standards and includes features such as alt text for images, keyboard navigation, and adjustable font sizes. This ensures that all users, including those with disabilities, can access and navigate the website easily.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Social Media Integration</h4>
								<p className="mt-2 dark:text-gray-600">Integrate social media buttons and feeds to encourage users to share content and engage with your brand on platforms like Facebook, Instagram, and Twitter. Showcase user-generated content and foster a sense of community.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Destination Discovery Quiz</h4>
								<p className="mt-2 dark:text-gray-600"> Create a fun and interactive quiz that helps users discover their ideal travel destinations based on their preferences, interests, and travel style. The quiz can recommend personalized travel experiences and itineraries tailored to each user profile.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://i.ibb.co/7nQ7Yxw/people-portrait-with-plane-flying-sky.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>

                



          </div>







        {/* contact us section */}
        <div className="mt-5">
            <div>
                <div className="bg-purple-700 text-white p-4 flex flex-col md:flex-row md:justify-between gap-5">

                    <div>
                        <img className="shadow-2xl rounded-3xl w-3/2 h-[500px]" src="https://i.ibb.co/2n1D86T/full-shot-travel-concept-with-landmarks.jpg" alt="" />
                    </div>

                    <div className="mr-10">
                      <Fade direction="down" triggerOnce={true}>
                        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">why you should choose us</h2>
                        <div className="mt-10 text-black">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">TouristTrekker: Elevating your tourism-focused experience with curated <br></br> destinations, insider tips, and personalized itineraries. Embark on <br></br> your dream country with confidence.</h2>
                                </div>
                            </div>
                        </div>
                        </Fade>
                         <Fade direction="up" triggerOnce={true}> 
                        <h2 className="lg:text-2xl md:text-xl text-base font-bold mt-5">Contact With Us</h2>
                        <div className="mt-5 text-black">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body ">
                                    <h1 className="flex items-center text-xl"><MdHomeWork />210/7A, motikheel, Dhaka, Bangladesh</h1>
                                    <p className="text-3xl flex gap-5">
                                        <NavLink ><FaFacebookSquare /> </NavLink>
                                        <NavLink ><FaLinkedin /> </NavLink>
                                        </p>
                                    {/* <p className="text-4xl"><FaFacebookSquare /></p> */}
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>



        </div>
    );
};

export default Home;