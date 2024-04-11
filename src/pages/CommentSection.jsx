import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BlogCart from "../components/BlogCart";
import CommentCard from "../components/CommentCard";

function CommentSection() {
  const { blogId } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(true);
  const [commentData, setCommentData] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { userId } = useParams();

  async function handleGetSingleBlog() {
    try {
      const data = {
        blogId,
      };
      const response = await axios.post(
        "http://localhost:8080/user/get-single-blog",
        data
      );
      console.log(response.data.data);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error in getting the blog: ", error);
      alert("Unable to load the data");
    }
  }

  async function handleGetComment() {
    try {
      const data = {
        blogId,
      };

      const response = await axios.post(
        "http://localhost:8080/user/get-comment",
        data
      );

      console.log(response.data.data);
      setCommentData(response.data.data);

      setCommentLoading(false);
    } catch (error) {
      console.log("Error in getting the comment");
      alert("Unable to fetch the comment");
    }
  }

  // function for posting the comment
  async function handlePostComment() {
    try {
      const data = {
        userId,
        content: commentText,
        commentorId: localStorage.getItem("_id"),
        blogId,
      };
      setCommentText("");

      if (!data.content) {
        alert('Empty comment is not allowed')
      }

      const response = await axios.post(
        "http://localhost:8080/user/post-comment",
        data
      );
      console.log(response.data.data);
      handleGetComment();
    } catch (error) {
      console.log("Unable to post the comment", error);
      alert("Unable to post the comment");
    }
  }
  useEffect(() => {
    handleGetSingleBlog();
  }, []);

  useEffect(() => {
    handleGetComment();
  }, []);

  return (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <BlogCart
          key={data._id}
          user={data.user}
          title={data.title}
          description={data.description}
          image={data.image}
        ></BlogCart>
      )}
      <div>
        <input
          type="text"
          placeholder="write your thoughts"
          className="w-[50%] border-2 border-gray-200 outline-none rounded-md  m-1 p-2"
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
        />
        <button
          className="w-[120px] p-2 pb-2 rounded-md border-2 border-black text-center font-bold hover:border-cyan-500 hover:text-white hover:bg-black transition-all"
          onClick={handlePostComment}
        >
          comment
        </button>
      </div>

      <div className="flex justify-center flex-col items-center">
        {commentLoading ? (
          <span>Loading...</span>
        ) : commentData.length == 0 ? (
          <span>No comment is yet</span>
        ) : (
          commentData
            .slice()
            .reverse()
            .map((comment) => (
              <CommentCard
                key={comment._id}
                fullName={comment.commentorId.fullName}
                content={comment.content}
                time={new Date(comment.createdAt).toLocaleString()}
              ></CommentCard>
            ))
        )}
      </div>
    </>
  );
}

export default CommentSection;
