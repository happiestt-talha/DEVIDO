import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import axios from 'axios'


const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`
const Home = ({ type }) => {

const [videos,setVideos]=useState([])

useEffect(() => {
  const fetchVideos = async () => {
    console.log('Fetching videos...')
    const res = await axios.get(`/video/${type}`)
    console.log('Videos: ', res.data)
    setVideos(res.data)
  }
  fetchVideos()
}, [type])
  return (
    <>
      <Container>
        {
          videos.map(video => (
            <Card key={video._id} video={video}  />
          ))
        }
      </Container>
    </>
  )
}

export default Home