import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [prevImage, setPrevImage] = useState();
  const [loading, setLoading] = useState(false)

  async function handlePostBlog() {
    try {
      
      setLoading(true)
      const data = new FormData()
      
      data.append('title', title)
      data.append('user', localStorage.getItem('_id'))
      data.append('description', description)
      data.append('image', image)
      
      const response = await axios.post(
        "http://localhost:8080/user/post-blog",
        data
      );
      
      setLoading(false)
      console.log(response.data);

      navigate("/home/my-blog");
    } catch (error) {
      console.log("blog post error: ", error);
      alert("Unable to post the blog");
    }
  }

  return (
    <div className="w-full h-[90vh] border-2 border-red-500 flex flex-col justify-center items-center">
      <div className="w-[80%] flex items-center justify-center">
        <input
          className="w-full h-[50px] outline-none border-2 border-gray-200 rounded-3xl p-3 m-2 mt-10"
          type="text"
          name="title"
          id="title"
          placeholder="Enter the title of your blog post"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="w-full flex justify-center">
        <label htmlFor="file" className="w-[78%] h-[100px] flex justify-center items-center bg-gray-200 border-dotted border-2 border-sky-400 rounded-md">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-z80fyv r-19wmn03 w-[30px] h-[30px]"
            style={{color: "rgb(29, 155, 240)"}}
          >
            <g>
              <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
            </g>
          </svg>
        </label>
        <input
          className="hidden"
          type="file"
          name="file"
          id="file"
          onChange={(e) => {
            const file = e.target.files[0];
            setImage(file);

            if (file) {
              const reader = new FileReader();

              reader.onloadend = function () {
                setPrevImage(reader.result);
              };

              reader.readAsDataURL(file);
            }
          }}
        />
      </div>
      <div className="w-full flex justify-center">
        <img src={prevImage} alt="" className="w-1/2" />
      </div>
      <div className="w-[80%] flex items-center justify-center">
        <textarea
          className="w-full h-[200px] outline-none border-2 border-gray-200 rounded-3xl p-3 m-2"
          placeholder="Enter the content of post"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="w-[80%] flex items-center justify-center">
        <button
          className="w-full border-2 border-gray-300 h-[50px] p-3 mp2 rounded-3xl font-serif font-bold bg-sky-500 hover:bg-sky-50"
          onClick={handlePostBlog}
        >
          {loading ? (<span>Uploading...</span>) : (<span>Post</span>)}
        </button>
      </div>
    </div>
  );
}

export default PostBlog;
