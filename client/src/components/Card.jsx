import React from 'react'
import styled from 'styled-components'
import Dummy from '../images/Dummy.jpg'
import Dummy2 from '../images/Dummy2.jpg'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 18rem;
    height: 12rem;
    background-color: ${({ theme }) => theme.bgLighter};
    color: ${({ theme }) => theme.text};
    cursor: pointer;
`

const Image = styled.img`
    width: 100%;
    height: 65%;
    object-fit: cover;
`

const Details = styled.div`
    display: flex;
    margin-top: .6rem;
    gap: 1rem;
    padding: 0 1rem;
    align-items: center;
`

const ChannelImage = styled.img`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background-color: beige;
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const ChannelName = styled.h1`
    color: ${({ theme }) => theme.text};
    font-size: .9rem;
`

const VideoData = styled.h2`
    color: ${({ theme }) => theme.textSoft};
    font-size: .8rem;
`
const Card = () => {
    return (
        <>
            <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
                <Container>
                    <Image src={Dummy} />
                    <Details>
                        <ChannelImage src={Dummy2} />
                        <Texts>
                            <ChannelName>Dum Daba k Bhago</ChannelName>
                            <VideoData>6 days ago . 765 views </VideoData>
                        </Texts>
                    </Details>
                </Container>
            </Link>
        </>
    )
}

export default Card