import React from "react";
import video from "../assets/video.mp4";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] fixed top-0 left-0 z-[-11]">
        <video
          src={video}
          className="w-[100vw] h-[100vh] object-cover"
          muted={true}
          autoPlay={true}
          loop
        ></video>
      </div>
      <div className="relative top-60">
        <h1 className="text-7xl font-mono font-bold text-white">
          Read The blog
        </h1>
        <Link to={"/home/allblog"}>
          <button className="w-[120px] h-[40px] border-2 border-black rounded-md text-white font-bold mt-5 hover:border-white hover:text-white hover:bg-black">
            Read
          </button>
        </Link>
      </div>
    </>
  );
}

export default Main;
