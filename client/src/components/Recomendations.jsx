import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Recomendations = ({ tags }) => {
    const [video, setVideo] = useState([])

    useEffect(() => {
        try {
            const fetchVideos = async () => {
                const res = await axios.get(`/video/tags?tags=${tags}`)
                console.log('Recomendations: ', res.data)
                setVideo(res.data)
            }

            fetchVideos()
        } catch (error) {
            console.log(error)
        }
    }, [tags])
    return (
        <>
            {
                video.map(video => (
                    <Card key={video._id} video={video} type="sm" />
                ))
            }
        </>
    )
}

export default Recomendations