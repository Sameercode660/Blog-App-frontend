import React from 'react'

function CommentCard({fullName, content, time}) {
  return (
    <div className='w-1/2 border-2 border-gray-200 m-4 rounded-3xl pt-1 pb-1'>
        <p>Commented by: { <span className='font-bold'>{fullName}</span>} {<span className='text-[14px] text-gray-500'>{time}</span>}</p>
        <p>{content}</p>
    </div>
  )
}

export default CommentCard
