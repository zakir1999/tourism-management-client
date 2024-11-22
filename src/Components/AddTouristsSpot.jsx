import Swal from "sweetalert2";
import { Dropdown, Menu } from "daisyui";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Typewriter } from "react-simple-typewriter";
import { ToastContainer, toast } from 'react-toastify';

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  const [myMail, setMyMail] = useState([]);
  const [myName, setMyName] = useState([]);

  useEffect(() => {
    setMyMail(user?.email);
    setMyName(user?.name);
  }, [user]);

  console.log(myMail, myName);

  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const touristsSpotName = form.touristsSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const shortDescription = form.shortDescription.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const photo = form.photo.value;

    const addTourists = {
      name,
      email,
      touristsSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      photo,
    };
    console.log(addTourists);

    if (
      name === "" ||
      email === "" ||
      touristsSpotName === "" ||
      countryName === "" ||
      location === "" ||
      shortDescription === "" ||
      averageCost === "" ||
      seasonality === "" ||
      travelTime === "" ||
      totalVisitorsPerYear === "" ||
      photo === ""
    ) {
      toast.error("please fill each form carefully");
    } else {
      //send data to the server
      fetch("https://tourism-management-server-three.vercel.app/tourist", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addTourists),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "success",
              text: "Added Successfully!",
              icon: "success",
              confirmButtonText: "okay",
            });
          }
        });
    }
  };
  return (
    <div className="bg-green-300 rounded-3xl p-20">
      <ToastContainer />
      <h2 className="text-3xl text-center text-purple-400">
        <span style={{ color: "purple", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Add Tourists Spot"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>

      <form onSubmit={handleAddCoffee}>
        {/* form name and email row */}
        <p className="border bg-purple-700"></p>
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="User Email"
              defaultValue={user?.email}
              readOnly={user.email ? true : false}
              className="input input-bordered"
              
            />

            {/* <input type="email" name="email" placeholder="User Email" className="input input-bordered w-full"  /> */}
          </div>
        </div>
        {/* form row tourists_spot_name and country_Name */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Tourists Spot Name</span>
            </label>
            <input
              type="text"
              name="touristsSpotName"
              placeholder="tourists_spot_name"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control md:w-1/2  ml-4">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>

            <select
              name="countryName"
              className="select select-secondary  w-full max-w-xs"
            >
              <option disabled value="" selected>
                Pick your Country Name
              </option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Thailand">Thailand</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Cambodia">Cambodia</option>
            </select>

            {/* <input type="text" name="countryName" placeholder="Country_Name"  className="input input-bordered w-full"  /> */}
          </div>
        </div>
        {/* form location and short description row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="location"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">short description</span>
            </label>
            <input
              type="text"
              name="shortDescription"
              placeholder="short description"
              className="input input-bordered w-full"
              
            />
          </div>
        </div>
        {/* form average_cost and seasonality  row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <input
              type="text"
              name="averageCost"
              placeholder="Average Cost"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Seasonality </span>
            </label>
            <input
              type="text"
              name="seasonality"
              placeholder="Seasonality "
              className="input input-bordered w-full"
              
            />
          </div>
        </div>
        {/* form travel_time and totalVisitorsPerYear row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <input
              type="text"
              name="travelTime"
              placeholder="Travel Time"
              className="input input-bordered w-full"
             
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Total Visitors Per Year</span>
            </label>
            <input
              type="text"
              name="totalVisitorsPerYear"
              placeholder="Total Visitors Per Year"
              className="input input-bordered w-full"
             
            />
          </div>
        </div>
        {/* form photo URL  row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              
            />
          </div>
        </div>

        <input type="submit" value="Add" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTouristsSpot;
