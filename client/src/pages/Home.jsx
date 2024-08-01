import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import axios from 'axios'
import { useSelector } from 'react-redux'


const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`
const Home = ({ type }) => {
  const { currentUser } = useSelector((state) => state.user)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      // console.log('Fetching videos...')
      console.log('Name: ', currentUser.name)
      console.log('Current User: ', currentUser)
      const res = await axios.get(`/video/${type}`)
      // console.log('Videos: ', res.data)
      setVideos(res.data)
    }
    fetchVideos()
    // eslint-disable-next-line
  }, [type])
  return (
    <>
      <Container>
        {
          videos.map(video => (
            <Card key={video._id} video={video} />
          ))
        }
      </Container>
    </>
  )
}

export default Home