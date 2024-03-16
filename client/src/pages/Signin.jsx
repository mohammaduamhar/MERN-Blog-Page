import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Alert, Label, Spinner, TextInput } from "flowbite-react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(signInFailure(null));
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      dispatch(signInFailure("All fields are required"));
      return;
    }

    try {
      dispatch(signInStart());
      const res = await axios.post("api/auth/signin", formData, {
        headers: { "Content-Type": "application/json" },
      });

      dispatch(signInSuccess(res));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.response.data.message));
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
            SignIn to start your journey
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            {errorMessage && <Alert className="mt-2" color='failure'>{errorMessage} </Alert>}
            <Button
              gradientDuoTone="purpleToPink"
              className="w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner color="white" size="sm" />
                  <span className="pl-2">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className=" flex gap-2 text-sm mt-5">
            <span >Do Not Have an account?</span>
            <Link to="/sign-Up" className="text-indigo-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
