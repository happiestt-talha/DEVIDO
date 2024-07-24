import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bgLighter};
    color: ${({ theme }) => theme.text};
`

const Text = styled.h1`

    color: ${({ theme }) => theme.text};
    font-size: 5rem;
    text-align: center;
`
const TestComp = () => {
    const params = useParams()
    return (
        <>
            <Container>
                <Text>{params}</Text>
            </Container>
        </>
    )
}

export default TestComp