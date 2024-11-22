import { IoMdTime } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const AllCard = ({tourist}) => {
    const {_id,name,email,touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totalVisitorsPerYear,photo} = tourist;
    return (
        <div>

<div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[400px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                
                <div className="flex">
                <p className="flex items-center"><span><CiLocationOn /></span>{touristsSpotName}</p>
                    <p className="flex items-center"><span><FaSackDollar /></span>{averageCost}</p>
                    
                </div>
                <p className="border-2"></p>
                <div className="flex">
                    <p className="flex items-center">Visitors:{totalVisitorsPerYear}</p>
                    <p className="flex items-center"><span><IoMdTime /></span>{travelTime}</p>
                    
                </div>
                <p className="border-2"></p>
                <p className="flex items-center"><span><TiWeatherCloudy /></span>{seasonality}</p>
                

                <div className="card-actions ">
                <Link to={`/tourist/${_id}`}><button className="btn bg-purple-700 text-white">View DEtails</button></Link>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default AllCard;