import { IoMdTime } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const TouristCard = ({tourist,setTourists,tourists}) => {
    const {_id,name,email,touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totalVisitorsPerYear,photo} = tourist;
    return (
        <div>
            
            <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-[300px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Country Name:{countryName}</h2>
                    <div className="flex">
                        <p>Name:{name}</p>
                        <p>Email:{email}</p>
                    </div>
                <p>Description:{shortDescription}</p>
                <div className="flex">
                    <p className="flex items-center"><span><FaSackDollar /></span>{averageCost}</p>
                    <p className="flex items-center"><span><IoMdTime /></span>{travelTime}</p>
                </div>
                <p className="border-2"></p>
                <div className="flex">
                    <p className="flex items-center"><span><CiLocationOn /></span>{touristsSpotName}</p>
                    <p className="flex items-center"><span><TiWeatherCloudy /></span>{seasonality}</p>
                </div>
                <p className="border-2"></p>
                <div className="flex">
                    <p className="flex items-center">Location:{location}</p>
                    <p className="flex items-center">Visitors:{totalVisitorsPerYear}</p>
                </div>

                <div className="card-actions ">
                <Link to={`/tourist/${_id}`}><button className="btn btn-primary">View DEtails</button></Link>
                </div>
            </div>
            </div>

        </div>
    );
};

export default TouristCard;