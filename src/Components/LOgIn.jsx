// import { getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import app from "../firebase/firebase.config";
// import { getAuth, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { IoIosLogIn } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'


const LOgIn = () => {
    
  const { signIn,googleLogin,updateProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
 

  

  const auth = getAuth(app);
  //this project
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("hello")
      googleLogin()
      .then((result) => {
        toast.success("Account successfully login.");
        setTimeout(() => {
          navigate(location.state ? location.state : "/")
        }, 1000);
      })
      .catch((error) => {
        toast.error("Something was wrong.");
      })
  };


    // this project
  const handleGithubSignIn = () => {
    console.log("hello")
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        updateProfile(user.displayName,user.photoURL);
        
       

        toast.success("Login successfully");
        setTimeout(() => {
          navigate(location.state ? location.state : "/")
        }, 1000);

        
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    
    signIn(email, password)
      .then((result) => {
      
        const user = result.user;
       
        e.target.reset();
        toast.success("Login successfully");
        setTimeout(() => {
          navigate(location.state ? location.state : "/")
        }, 1000);

       
      })
      .catch((error) => {
        toast.error('incorrect email or password');
      });
  };
    return (
        <div className="border rounded-3xl bg-violet-500">
             <ToastContainer />


             <div>
        <h2 className="text-3xl my-10 text-center">
        <span style={{ color: 'black', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Please Login']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        
        </h2>
        <img className="mx-auto w-1/2 h-[200px] rounded-2xl" src="https://i.ibb.co/4Wh1qX2/124066.jpg" alt="" />
        <form
          onSubmit={handleLogin}
          className="card-body mx-auto md:w-3/4 lg:w-1/2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-3xl">Email</span>
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
              <span className="label-text text-3xl">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              
            </label>
          </div>
          <div className="form-control mt-6 ">
            <button className="btn btn-primary" type="submit">
              <span className="text-2xl"><IoIosLogIn /></span>
              Login
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="btn mt-6 btn-secondary"
            >
              <span className="text-2xl"><FaGoogle /></span>
              Google Login
            </button>
            {/* this project */}
            <button
              onClick={handleGithubSignIn}
              className="btn mt-6 btn-accent"
            >
              <span className="text-2xl"><FaGithub /></span>
              Github Login
            </button>
            
          </div>
        </form>

        <p className="text-center mt-4 p-4">
          Do not have a account?{" "}
          <Link className=" font-bold text-amber-800" to="/register">
            Register
          </Link>
        </p>
      </div>
            
        </div>
    );
};

export default LOgIn;