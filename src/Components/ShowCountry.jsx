import { Link } from "react-router-dom";


const ShowCountry = ({showCountry}) => {
    const {_id,touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totalVisitorsPerYear,photo} =showCountry
    return (
        <div >
            <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img  src={photo} alt="Shoes" className="rounded-xl h-[300px]" />
        </figure>
        <div className="card-body items-center text-center">
            <div className="flex gap-4">
            <h1>Country Name:{countryName}</h1>
            <h2>Tourists Spot Name:{touristsSpotName}</h2>
            </div>
            <h2 className="card-title">Location:{location}</h2>
            <p>Description:{shortDescription}</p>
            <div className="flex gap-4">
                <p>Average Cost:{averageCost}</p>
                <p>Seasonality:{seasonality}</p>
            </div>
            <div className="card-actions">
            <Link to={`/tourist/${_id}`}><button className="btn btn-primary">View DEtails</button></Link>
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default ShowCountry;