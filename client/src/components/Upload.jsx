import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios'
import app from '../firebase/firebase';
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.bgLighter || 'white'};
    color: ${({ theme }) => theme.text};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 50%;
    height: 85vh;
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    background-color: ${({ theme }) => theme.bg};
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
`;
const Input = styled.input`
    padding: 0.9rem;
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
    width: 80%;
    background-color: transparent;
`;
const Button = styled.button`
    padding: 0.9rem;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
    width: 80%;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.soft};
    }
`;
const Label = styled.label`
    font-size: .8rem;
`;
const Desc = styled.textarea`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
`;
const Upload = ({ setOpen }) => {
    const [img, setImg] = useState(undefined);
    const [video, setVideo] = useState(undefined);
    const [imgPerc, setImgPerc] = useState(0);
    const [videoPerc, setVideoPerc] = useState(0);
    const [inputs, setInputs] = useState({});
    const [tags, setTags] = useState([]);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleTags = (e) => {
        setTags(e.target.value.split(","));
    };

    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },
            (error) => { },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs((prev) => {
                        return { ...prev, [urlType]: downloadURL };
                    });
                });
            }
        );
    };

    useEffect(() => {
        video && uploadFile(video, "videoUrl");
    }, [video]);

    useEffect(() => {
        img && uploadFile(img, "imgUrl");
    }, [img]);

    const handleUpload = async (e) => {
        e.preventDefault();
        const res = await axios.post("/videos", { ...inputs, tags })
        setOpen(false)
        res.status === 200 && navigate(`/video/${res.data._id}`)
    }

    return (
        <Container>
            <Wrapper>
                <h1>Upload a New Video</h1>
                <Label>Video:</Label>
                {videoPerc > 0 ? (
                    "Uploading:" + videoPerc
                ) : (
                    <Input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setVideo(e.target.files[0])}
                    />
                )}
                <Input
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                />
                <Desc
                    placeholder="Description"
                    name="desc"
                    rows={8}
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    placeholder="Separate the tags with commas."
                    onChange={handleTags}
                />
                <Label>Image:</Label>
                {imgPerc > 0 ? (
                    "Uploading:" + imgPerc + "%"
                ) : (
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                )}
                <Button onClick={handleUpload}>Upload</Button>
            </Wrapper>
        </Container>
    );
};

export default Upload;