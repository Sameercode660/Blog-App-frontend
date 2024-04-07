import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function PostBlog() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  async function handlePostBlog() {
    try {
      const data = {
        user: localStorage.getItem('_id'),
        title,
        description
      }

      const response = await axios.post('http://localhost:8080/user/post-blog', data)

      console.log(response.data)

      navigate("/home/my-blog")
      
    } catch (error) {
      console.log('blog post error: ', error)
      alert("Unable to post the blog")
    }
  }

  return (
    <div className='w-full h-[90vh] border-2 border-red-500 flex flex-col justify-center items-center'>
      <div className="w-[80%] flex items-center justify-center">
        <input className="w-full h-[50px] outline-none border-2 border-gray-200 rounded-3xl p-3 m-2 mt-10" type="text" name="title" id="title" placeholder='Enter the title of your blog post' onChange={(e) => {
          setTitle(e.target.value)
        }}/>
      </div>
      <div className="w-[80%] flex items-center justify-center">
        <textarea className="w-full h-[600px] outline-none border-2 border-gray-200 rounded-3xl p-3 m-2" placeholder='Enter the content of post' onChange={(e) => {
          setDescription(e.target.value)
        }} ></textarea>
      </div>
      <div className="w-[80%] flex items-center justify-center">
        <button className="w-full border-2 border-gray-300 h-[50px] p-3 mp2 rounded-3xl font-serif font-bold bg-sky-500 hover:bg-sky-50" onClick={handlePostBlog}>Post</button>
      </div>
    </div>
  )
}

export default PostBlog
