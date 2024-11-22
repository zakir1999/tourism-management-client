import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import Swal from "sweetalert2";


const UpdateTourists = () => {

    const {id} = useParams();
    console.log(id);
    const [tourist, setTourist] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        fetch('https://tourism-management-server-three.vercel.app/tourist')
            .then(res => res.json())
            .then(data => {
                const one = data.find(f => f._id === id);
                setTourist(one);
                setLoad(false);
            })
            .catch(error => {
                // Handle any network or fetch errors here
                console.error("Error fetching tourist data:", error);
            });
    }, [id]);
    console.log(tourist);
    // const {_id,foodName, foodCategory, quantity, origin, description, price} = food || [];

    const {_id,name,email,touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totalVisitorsPerYear,photo} = tourist || [];

    

    const handleUpdate = ( event) =>{
        event.preventDefault();
        console.log(_id);


        const form = event.target;
        const touristsSpotName = form.touristsSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const photo = form.photo.value;

        const update = {touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totalVisitorsPerYear,photo}
        console.log(update);


        fetch(`https://tourism-management-server-three.vercel.app/tourist/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'information Updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }



    


    return (
        <div className="bg-purple-400 rounded-3xl p-24">
            <h2 className="text-3xl text-center text-black">
            <span style={{ color: 'purple', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Update As You Like']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        <p className="border"></p>
            
            </h2>
            <form onSubmit={handleUpdate}>
        {/* form row tourists_spot_name and country_Name */}
       <div className="md:flex mb-8">
       <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Tourists Spot Name</span>
          </label>
          <input type="text"  name="touristsSpotName" defaultValue={touristsSpotName}  placeholder="tourists_spot_name" className="input input-bordered w-full"  />
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Country Name</span>
          </label>
          <input type="text" name="countryName" defaultValue={countryName} placeholder="Country_Name"  className="input input-bordered w-full"  />
        
        </div>
       </div>
        {/* form location and short description row */}
       <div className="md:flex mb-8">
       <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name="location" defaultValue={location} placeholder="location" className="input input-bordered w-full"  />
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">short description</span>
          </label>
          <input type="text" name="shortDescription" defaultValue={shortDescription} placeholder="short description" className="input input-bordered w-full" />
        
        </div>
       </div>
        {/* form average_cost and seasonality  row */}
       <div className="md:flex mb-8">
       <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Average Cost</span>
          </label>
          <input type="text" name="averageCost" defaultValue={averageCost} placeholder="Average Cost" className="input input-bordered w-full"  />
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Seasonality </span>
          </label>
          <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality " className="input input-bordered w-full"  />
        
        </div>
       </div>
        {/* form travel_time and totalVisitorsPerYear row */}
       <div className="md:flex mb-8">
       <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Travel Time</span>
          </label>
          <input type="text" name="travelTime" defaultValue={travelTime} placeholder="Travel Time" className="input input-bordered w-full"  />
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Total Visitors Per Year</span>
          </label>
          <input type="text" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} placeholder="Total Visitors Per Year" className="input input-bordered w-full"  />
        
        </div>
       </div>
        {/* form photo URL  row */}
       <div className="mb-8">
       <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full"  />
        </div>
        
       </div>



        
          
            <input type="submit" value="Update" className="btn btn-block" />
        
      </form>
    
            
        </div>
    );
};

export default UpdateTourists;