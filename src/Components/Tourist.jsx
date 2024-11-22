import { useLoaderData, useParams } from "react-router-dom";

import { IoMdTime } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
// import { useEffect, useState } from "react";


const Tourist = () => {
    const {_id} = useParams();
    const spots = useLoaderData();

   
    
    
    console.log(spots.countryName)
    return (
        <div>
            



            <div className="lg:grid lg:grid-cols-2 gap-10">
                <div>
                        <img className="rounded-2xl w-[600px] h-[500px]" src={spots.photo} alt="" />
                        
                </div>
                
                <div className="">
                    <h1 className="text-[#131313] font-bold text-4xl">User Name:{spots.name}</h1>
                    <h4 className="text-base font-medium py-4">User Email:{spots.email}</h4>
                    <h4 className="text-base font-medium py-4">Country Name:{spots.countryName}</h4>
                    <p className='border-b-2'></p>
                    {/* <h3 className="text-base font-medium py-4">{book.category}</h3> */}
                    <p className='border-b-2'></p>
                    <h1 className="py-4"><span className="font-bold text-base">Description:</span>{spots.shortDescription}</h1>

                    <p className='border-b-2 '></p>
                    <div className="flex py-4 gap-10">
                    <p className="flex gap-1 items-center text-base"><span className="font-bold">Average Cost:</span>{spots.averageCost}<span className="text-purple-500 text-base"><FaSackDollar /></span></p>
                    <p className="flex items-center gap-1 text-base"><span className="font-bold">Travel Time:</span> {spots.travelTime}<span className="text-purple-500 font-bold text-base"><IoMdTime /></span></p>
                </div>
                <p className="border-b-2"></p>
                <div className="flex gap-10 py-4">
                    <p className="flex gap-1  items-center"><span className="font-bold">Location:</span>{spots.location}<span className="text-purple-500 font-extrabold text-base"><CiLocationOn /></span></p>
                    <p className="flex gap-1 items-center"> <span className="font-bold">Visitors:</span>{spots.totalVisitorsPerYear} <span className="text-purple-500 font-bold text-base"><IoIosPeople /></span></p>
                </div>
                <p className="border-b-2"></p>
                <div className="flex py-4 gap-10">
                    <p className="flex gap-1 items-center"><span className="font-bold">Spot:</span>{spots.touristsSpotName} <span className="text-purple-500 text-base"><FaLocationArrow /></span> </p>
                    <p className="flex gap-1 items-center"><span className="font-bold">Seasonality:</span> {spots.seasonality} <span className="text-purple-500 text-xl font-bold"><TiWeatherCloudy /></span></p>
                </div>
                

                    {/* <div className="flex gap-10">
                        <div className="text-[#131313B2]">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>

                        </div>

                        <div className="text-[#131313] text-base font-semibold">
                            <p>{book.totalPages}</p>
                            <p>{book.publisher}</p>
                            <p>{book.yearOfPublishing}</p>
                            <p>{book.rating}</p>

                        </div>

                    </div> */}

                   



                </div>
            </div>
        </div>
    );
};

export default Tourist;