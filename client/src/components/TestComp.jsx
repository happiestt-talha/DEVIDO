import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bgLighter || 'white'};
    color: ${({ theme }) => theme.text };
    padding: 0.5rem;
`

const Text = styled.h1`
    font-size: 4rem;
    text-align: center;
`

const TestComp = () => {
    const { id } = useParams()
    return (
        <Container>
            <h1>Video Id:</h1>
            <Text>{id ? id : 'No ID Provided'}</Text>
        </Container>
    )
}

export default TestComp
