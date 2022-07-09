import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/9G8dvFg/bannerbackground.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        paddingTop:"150px"
      }}
    >
      
      <div className="bg-slate-200 w-3/6 h-96 mx-auto flex px-6 items-center rounded-md">
        <div>
          <img className="rounded-md" width="350" src="https://i.ibb.co/CzjhYMN/6300830.jpg" alt="" />
        </div>
        <div className="flex flex-col ml-10">
          <h2 className="text-3xl mb-5 mt-2 font-bold">Login</h2>
          <input
            className="mb-2 w-60 h-8 bg-slate-50 text-xs pl-2 rounded-md"
            placeholder="Enter Your Email"
            type="email"
            name=""
            id=""
          />
          <input
            className=" w-60 bg-slate-50 h-8 text-xs pl-2 rounded-md"
            placeholder="Enter Your Password"
            type="password"
            name=""
            id=""
          />
          <p className="text-right mb-3"><small>Forgot Password? <span className="text-red-600">Reset</span></small></p>
          <button class="btn btn-dark btn-sm text-xs w-full mx-auto">Login</button>
          <div class="divider">OR</div>
          <div>
            <button class="btn btn-outline btn-dark btn-sm">
              <img
                width="24"
                src="https://i.ibb.co/h9DDdjT/google.png"
                alt=""
              />
              <span className="pl-1 text-xs">Google Login</span>
            </button>
          </div>
          <div className="mt-4">
            <p><small>Don't have an account? <span className="text-red-600"><Link to='/signup'>Create Account</Link></span></small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
