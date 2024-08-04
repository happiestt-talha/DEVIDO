import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Comment from './Comment'
import { useSelector } from 'react-redux'


const Container = styled.div`
  color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
  padding: 0.6rem 0.6rem;
  display: flex;
  gap:1rem ;

`
const Input = styled.input`
  background-color: transparent;
  border: 1px solid;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
`
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`
const Button = styled.button`
  background-color: transparent;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-inline: auto;
  transition: 0.3s ease;
  &:hover{
    background-color: #3ea6ff;
    color: white;
  }
`
const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  useEffect(() => {
    const fetchComments = async () => {
      try {
        console.log('Current User: ', currentUser)
        console.log('Fetching comments...')
        console.log('Video ID: ', videoId)
        const res = await axios.get(`/comment/${videoId}`)
        console.log('Comments: ', res.data)
        setComments(res.data)
      } catch (err) {
        console.log('err: ', err)
      }
    }
    fetchComments()
    // eslint-disable-next-line
  }, [videoId])



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // console.log('Submitting comment...')
      // console.log('Comment: ', comment)
      // console.log('Video ID: ', videoId)
      const res = await axios.post(`/comment`, { desc: comment, videoId: videoId })
      // console.log('Comment res: ', res.data)
      setComments((prev) => [...prev, res.data])
      setComment('')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setComment(e.target.value)
    console.log('OnChange: ', e.target.value)
  }
  return (
    <>
      <Container>

        <Wrapper>
          <Avatar src={currentUser?.img || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' } />
          <Input placeholder="Add a comment..." onChange={handleChange} value={comment} />
          <Button onClick={handleSubmit}>Post</Button>
        </Wrapper>
        {
          comments.length > 0 && comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))
        }
      </Container>
    </>
  )
}

export default Comments