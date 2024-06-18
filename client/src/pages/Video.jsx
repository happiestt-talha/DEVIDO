import React from 'react'
import { useParams } from 'react-router-dom'

const Video = () => {
  
  const { id } = useParams()
  return (
    <>
      <div>Video</div>
      <div>Video id: {id}</div>
    </>
  )
}

export default Video