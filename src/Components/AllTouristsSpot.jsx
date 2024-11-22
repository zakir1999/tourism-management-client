import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import TouristCard from "./TouristCard";
import AllCard from "./AllCard";


const AllTouristsSpot = () => {
    const loadedTourists = useLoaderData();
    // console.log(loadedTourists);
  const [tourists,setTourists] = useState([]);
  useEffect(() =>{
    fetch('https://tourism-management-server-three.vercel.app/tourist')
    .then(res => res.json())
    .then(data =>{
        setTourists(data);
    })
  },[])


  const [sortAvg,setSortAvg] = useState("sortBy")


  // const [cost, setCost] = useState([]);
  
 
  
  


    const sortByAverageCost = () => {
      setSortAvg("dicending")
        const sortedCost = [...tourists].sort((a, b) => b.averageCost - a.averageCost);
        
        setTourists(sortedCost);
        
      };








    return (
        <div className="text-center">

<details className="dropdown">
          
          <summary className="m-1 btn bg-[#23BE0A] text-white flex"><span>Sort By</span> <span className='text-2xl'><IoMdCheckmark /></span> </summary>
        <ul className="p-2 shadow menu dropdown-content z-[10] bg-base-100 rounded-box w-52">
          <li><a onClick={sortByAverageCost}>Average_Cost</a></li>
          {/* <li><a >1</a></li>
          <li><a >3</a></li> */}
        </ul>
      </details>





             {/* <h2>Tourists Length:{tourists.length}</h2> */}
            <div>
            <div className='grid mt-20 lg:grid-cols-3 md:grid-cols-2 gap-4'>
      {
         tourists.map(tourist => <AllCard key={tourist._id} sortByAverageCost={() =>sortByAverageCost(tourist.averageCost)} tourist={tourist} tourists={tourists} setTourists={setTourists}></AllCard>)
      }
      </div>

            </div>
        </div>
    );
};

export default AllTouristsSpot;