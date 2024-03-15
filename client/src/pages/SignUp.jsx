import { Alert, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  

  const handleChange = (e) => {
    setErrorMessage(null);
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage("All fields are required");
      return;
    }
  
    try {
      setLoading(true)
      const res = await axios.post("api/auth/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });  

      setLoading(false)
      navigate('/sign-in')
     
    } catch (error) {
      setErrorMessage(error.response.data.message)   
      setLoading(false) 
    }
  }
  

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          {" "}
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-600 rounded-lg text-white ">
              Petii ♥
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Welcome to Petii ♥ Blog <br />
            Create an account to start your journey
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Username"
                className="w-full"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Email"
                className="w-full"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Password"
                className="w-full"
                id="password"
                onChange={handleChange}
              />
            </div>
            {
              errorMessage && <Alert className="mt-2" color='failure'>{errorMessage} </Alert>

            }
            <Button
              gradientDuoTone="purpleToPink"
              className="w-full"
              type="sumbit"
              disabled={loading}
            >
             {
              loading ? (<> <Spinner color="white" size="sm" />
              <span className="pl-2">Loading...</span></>
               
              ) : "Sign Up"
             }
            
            </Button>
          </form>
          <div className=" flex gap-2 text-sm mt-5">
            <span >Have an account?</span>
            <Link to="/sign-in" className="text-indigo-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
