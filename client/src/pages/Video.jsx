import React from 'react'
// import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

`
const Video = () => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  // const { id } = useParams()
  return (
    <>
      {/* <div>Video</div>
      <div>Video id: {id}</div> */}
      <Container>
        {
          data.map((item, index) => {
            return <Card key={index} />
          })
        }

      </Container>
    </>
  )
}

export default Video