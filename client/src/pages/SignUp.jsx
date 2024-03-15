import { Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {Button} from 'flowbite-react'

export default function SignUp() {
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
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Username"
                className="w-full"
                id="username"
              />
            </div>
            <div className="">
              <Label value="Email" />
              <TextInput
                type="text"
                placeholder="Email"
                className="w-full"
                id="email"
              />
            </div>
            <div className="">
              <Label value="Password" />
              <TextInput
                type="text"
                placeholder="Password"
                className="w-full"
                id="password"
              />
            </div>
            <Button gradientDuoTone="purpleToPink" className="w-full" type="sumbit">Sign Up</Button>
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
