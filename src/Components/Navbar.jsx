import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Fade } from "react-awesome-reveal";



const Navbar = () => {
  
  const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const handleToggle =(e) =>{
    if(e.target.checked) {
      setTheme("dark");
    }
    else{
      setTheme("light");
    }
  }


  useEffect(() =>{
    localStorage.setItem("theme",theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme",localTheme);

  },[theme])



    const { user, logOut, profilePicture } = useContext(AuthContext);
  const[currentuser,setCurrentUser] = useState()
  useEffect(() =>{
    setCurrentUser(user)
  },[user])


  const handleSignOut = () => {
    logOut().then().catch();
  };

  const photo = () => {
    profilePicture().then().catch();
  };
    const navLinks = (
        <>
        <Fade cascade damping={0.2} triggerOnce={true}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allTourists">All Tourists Spot</NavLink>
          </li>
          <li>
            <NavLink to="/addTourists">Add Tourists Spot</NavLink>
          </li>
          
            <li>
              <NavLink to="/myList">My List</NavLink>
            </li>
          
          </Fade>
        </>
      );
    return (
        <div>

<div className="navbar bg-violet-400 my-5 p-4 rounded-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost  text-[16px] md:text-2xl"> <span><p className="lg:font-extrabold md:text-[20px] text-green-500"><MdOutlineTravelExplore /></p></span>TouristTrekker</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-purple-700 text-base font-bold menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end md:mr-4 ">
          {/* theme */}

          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleToggle}
            checked={theme === "light" ? false : true }
            />
            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            
          </label>






        <div className="tooltip lg:tooltip-left" data-tip={currentuser?.displayName}>
        <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost  btn-circle avatar" 
          >
            <div className="w-10  rounded-full" >

              {user ? (
                <div className="flex border justify-center items-center h-full">
                  {user?.photoURL ? (
                    <img  alt="avatar" src={currentuser?.photoURL} />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </div>
              ) : null}
            </div>
          </div>
  
</div>
          
        </div>

         

           <div className="flex flex-col gap-4 md:flex-row">
           {
              user?<span className="md:btn text-white rounded btn-sm py-2 md:px-6 bg-pink-400 md:bg-pink-400 md:text-white md:hover:bg-[#A62F03]" onClick={handleSignOut}>Logout</span>:<>
              <button className="">
                <Link to="/login">

                
                    <span className="md:btn text-white rounded btn-sm py-2 md:px-6 bg-pink-400 md:bg-pink-400 md:text-white md:hover:bg-[#A62F03]">Login</span>
                  
                </Link>
                
              </button>
            <button className="">
                <Link to="/register">
                    
                    <span className="md:btn text-white rounded btn-sm py-2 md:px-6 bg-fuchsia-600 md:bg-fuchsia-600 ml-2 md:text-white md:hover:bg-fuchsia-600">register</span>
                  
                </Link>
                
              </button>


              </>


           }
           </div>
      </div>
      </div>
            
        
    );
};

export default Navbar;