
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Providers/AuthProviders";
import { FcRegisteredTrademark } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'


const Register = () => {

    const navigate = useNavigate();
  const location = useLocation();
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { user,createUser,setUser,profilePicture } = useContext(AuthContext);

  const from = location?.state?.pathname || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(name,email,password,photo)
    
     //  reset error and success
    setRegisterError("");
    setSuccess("");


    if(name === "" || email === "" || password === "" || photo === ""){
      toast("Input field must not be empty.");
    }else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      toast("Password should contain both uppercase and lowercase characters.");
    
    }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast("Please provide an valid Email.");
    }else if(password.length < 6){
      toast("Password must be at least 6 characters.");
    }
    else{
      createUser(email, password)
      .then((result)=>{
        profilePicture(name,photo).then(() => {
          setUser((prevUser)=> {
            return {...prevUser, displayName:name, photoURL: photo};
          })
        }).catch((error) => {
          console.log(error)
        });
        toast.success("Account created successfully.")
        setTimeout(() => {
          navigate(location.state ? location.state : "/")
        }, 1000);
        
        console.log(result.user)
        e.target.reset();
      })
      .catch((error)=>{
        toast.error("An account already exists!")
      })
    }
  };

    return (
        <div>
            <ToastContainer />

<div className="border rounded-2xl bg-purple-300 m-10">
     
     <h2 className="text-3xl my-10 text-center">
     <span style={{ color: 'purple', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Please Register']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
     
     
     </h2>
     <img className="mx-auto w-1/2 h-[200px] rounded-2xl" src="https://i.ibb.co/BtrdDG3/125163.jpg" alt="" />
     <form
       onSubmit={handleRegister}
       className="card-body mx-auto md:w-3/4 lg:w-1/2"
     >
       <div className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input
           type="text"
           name="name"
           placeholder="Name"
           className="input input-bordered"
           required
         />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Photo URL</span>
         </label>
         <input
           type="text"
           name="photo"
           placeholder="Photo URL"
           className="input input-bordered"
           required
         />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Email</span>
         </label>
         <input
           type="email"
           name="email"
           placeholder="Email"
           className="input input-bordered"
           required
         />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <div className="relative  mb-4">
           <input
             className="border-red-600 w-full py-2 px-4"
             type={showPassword ? "text" : "password"}
             placeholder="password"
             name="password"
             id=""
             required
           />
           <span
             className="absolute top-3 right-2"
             onClick={() => setShowPassword(!showPassword)}
           >
             {showPassword ? <FaEyeSlash /> : <FaEye /> }
           </span>
         </div>
         <label className="label">
           
         </label>
       </div>
       <div className="form-control flex mt-6">
        
         <button className="btn  text-center items-center btn-secondary"><span className="text-3xl"><FcRegisteredTrademark /></span>Register</button>
       </div>
     </form>

     {registerError && <p className="text-red-700">{registerError}</p>}

     {success && <p className="text-green-700">{success}</p>}

     <p className="text-center mt-2 p-4">
       Already have an account?{" "}
       <Link className=" font-bold text-blue-700" to="/login">
         Login
       </Link>
     </p>
   </div>
            
        </div>
    );
};

export default Register;