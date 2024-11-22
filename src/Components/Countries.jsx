import { Link } from "react-router-dom";


const Countries = ({country}) => {
    const {photo,countryName,description} = country;
    return (
        <Link to={`/viewCountry/${countryName}`}>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{countryName}</h2>
                    <p>{description}</p>
                    {/* <div className="card-actions">
                    <button className="btn btn-primary"></button>
                    </div> */}
                </div>
                </div>
            </div>
            
        </Link>
    );
};

export default Countries;