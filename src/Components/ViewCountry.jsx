import { useLoaderData } from "react-router-dom";
import ShowCountry from "./ShowCountry";


const ViewCountry = () => {
    const country = useLoaderData();
    console.log(country);

    
    return (
        <div className='grid md:grid-cols-2 gap-4'>
            {
                country.map(showCountry =><ShowCountry key={showCountry._id} showCountry={showCountry}></ShowCountry>)
            }
            
        </div>
    );
};

export default ViewCountry;