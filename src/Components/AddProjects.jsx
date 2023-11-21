import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PlaceImg from '../Asset/image.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../services/allAPI';

function AddProjects() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setProjectDetails({
            title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
        })
        setPreview("")
    }
    const handleShow = () => setShow(true);
    const [token, setToken] = useState("")

    const [projectDetails, setProjectDetails] = useState({
        title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
    })
    const [preview, setPreview] = useState("")

    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    },[])

    console.log(projectDetails);
    const handlAdd = async (e) => {
        e.preventDefault()
        const { title, languages, overview, github, website, projectImage } = projectDetails
        if (!title || !languages || !overview || !github || !website || !projectImage) {
            toast.info("Please fill the form completly")
        } else {
            const reqbody = new FormData()
            reqbody.append("title", title)
            reqbody.append("languages", languages)
            reqbody.append("overview", overview)
            reqbody.append("github", github)
            reqbody.append("website", website)
            reqbody.append("projectImage", projectImage)
            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await addProjectAPI(reqbody, reqHeader)
                if (result.status == 200) {
                    console.log(result.data);
                    handleClose()
                    alert("Project added")
                } else {
                    console.log(result);
                    console.log(result.response.data);
                }

            }

        }
    }

    return (
        <>
            <div>
                <button className='btn btn-success' onClick={handleShow}>Add Projects</button>
                <Modal size='lg' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center">
                                <label>
                                    <input type="file" style={{ display: "none" }} onChange={e => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
                                    <img width={'100%'} src={preview ? preview : PlaceImg} alt="" />
                                </label>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div style={{ width: "90%" }} className='d-flex justify-content-center align-items-center flex-column'>
                                    <TextField className='w-100' id="standard-basic" label="project title" variant="standard" value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Language used" variant="standard" value={projectDetails.languages} onChange={(e) => setProjectDetails({ ...projectDetails, languages: e.target.value })} />
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Github" variant="standard" value={projectDetails.github} onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} />
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Website link" variant="standard" value={projectDetails.website} onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} />
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Project Overview" variant="standard" value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={e => handlAdd(e)}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <ToastContainer autoClose={2000} theme="colored" position="top-right" />
        </>
    )
}

export default AddProjects