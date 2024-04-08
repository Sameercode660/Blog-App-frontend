import React, { useEffect, useState } from 'react'
import BlogCart from '../components/BlogCart'
import axios from 'axios'

function MyBlog() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  async function handleFetchMyBLog() {
    try {
      const response = await axios.post('http://localhost:8080/user/my-blog', {user: localStorage.getItem('_id')})
      console.log(response)
      console.log(response.data)
      setData(response.data.data)
      setLoading(false)
    
    } catch (error) {
      console.log('Error in Fetching my data', error)
    }
  }

  useEffect(()=> {
    handleFetchMyBLog()
  }, [])
  return (
    <>
      {
        loading ? <p>Loading...</p> : (
          data.map((element) => (
            <BlogCart key={element._id} blogId={element._id} user={element.user} title={element.title} description={element.description}></BlogCart>
            
          ))
        )
      }
    </>
  )
}

export default MyBlog
