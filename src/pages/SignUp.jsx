import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLoginContext from "../context/LoginContext";
import axios from "axios";

function SignUp() {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setVerified} = useLoginContext()
  const navigate = useNavigate()

  async function handleSingUp() {
    try {
        if(!fullName || !email || !password) {
            alert('Any one field is empty')
            return
        }

        const data = {
            fullName,
            email, 
            password
        }

        const response = await axios.post('http://localhost:8080/user/sign-up', data)
        setVerified(response.data.status)
        navigate('/home')
    } catch (error) {
        console.log(error)
        alert('Unable to create the user, try again later')
    }
  }
  return (
    <section
      className="w-[100vw] h-[100vh] flex justify-center items-centerbg-no-repeat object-cover fixed top-0 left-0 right-0 bottom-0"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=2048x2048&w=is&k=20&c=bfVX4nRr169bamT8x2VrPgjQYzS6y3D4Y9kGvoLiAS0=')",
      }}
    >
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
        <div
          className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md rounded-3xl p-10"
          style={{ boxShadow: "0px 0px 200px 50px cyan" }}
        >
          <div className="mb-2 flex justify-center">
            <h1 className='className="text-center text-3xl font-bold leading-tight text-white'>
              Ancient Bharat
            </h1>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-white">
            Sign Up
          </h2>
          <p className="mt-2 text-center text-sm text-white ">
            Already a user ?
            <Link
              to="/"
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              <span> Login </span>
            </Link>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-3xl p-6 border-2 border-cyan-500 bg-transparent text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="FullName"
                    value={fullName}
                    onChange={(e)=> {
                        setFullName(e.target.value)
                    }}
                  />
                </div>

                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-3xl p-6 border-2 border-cyan-500 bg-transparent text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=> {
                        setEmail(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-3xl p-6  border-2 border-cyan-500 bg-transparent text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> {
                        setPassword(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-3xl bg-white px-3.5 py-2.5 font-semibold leading-7 text-black hover:text-white hover:bg-black border-2 "
                  onClick={handleSingUp}
                >
                  SignUp
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
