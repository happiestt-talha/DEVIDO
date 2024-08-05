import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Card from '../components/Card'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%; ;
`
const Heading = styled.h1`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    margin: .5rem;
`
const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%; ;
    gap: 0.5rem;
    margin-bottom: 1rem;
`
const Image = styled.img`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
`
const Label = styled.label`
    font-size: .8rem;
`
const Input = styled.input`
    width: 150%; 
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    border: 1px solid;
    border-radius: 3px;

    background-color: transparent;
    color: ${({ theme }) => theme.text};

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border: 1px solid #3ea6ff;
        box-shadow: 0 0 10px #3ea6ff;
    }
`
const Flex = styled.div`
    width: 100%; ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    background-color:${({ theme }) => theme.bgLighter}; ;
    padding: 0.5rem 0.5rem;
    border-radius: 3px; ;
`
const Text = styled.p`
    color: ${({ theme }) => theme.text};
    font-size: 5rem;
`

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%; ;
    gap: 0.5rem;
    margin-bottom: 1rem;
`
const Profile = () => {
    const { currentUser } = useSelector((state) => state.user)
    const [userVideos, setUserVideos] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            console.log('Fetching videos...')
            const res = await axios.get(`/video/uploads/${currentUser?._id}`)
            console.log('User Videos: ', res.data)
            setUserVideos(res.data)
        }
        fetchVideos()
    }, [currentUser?._id])
    return (
        <>
            <Container>
                <Heading>Profile</Heading>
                <Flex>
                    <div>
                        <Items>
                            <Label>Name: </Label>
                            <Input type="text" value={currentUser?.name} disabled />
                        </Items>

                        <Items>
                            <Label>Email: </Label>
                            <Input type="email" value={currentUser?.email} disabled />
                        </Items>
                    </div>

                    <Image src={currentUser?.img} alt={currentUser?.name} />
                </Flex>

                    <Heading>Videos</Heading>
                <VideoContainer>
                        {
                            userVideos.length > 0
                                ? userVideos.map((video) => (
                                    <Card video={video} />
                                ))
                                : <Text>No Videos Uploaded</Text>
                        }
                </VideoContainer>

            </Container>
        </>
    )
}

export default Profile