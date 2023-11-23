import React, { useState } from 'react'
import { BASE_URL } from '../services/baseUrl';
import { Modal,Button } from 'react-bootstrap';
import { TextField } from '@mui/material';


function EditProject({project}) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = ()=>setShow(false)
    const [projectDetails,setProjectDetails]= useState({
        title:project.title,languages:project.languages,overview:project.overview,github:project.github,website:project.website,projectImage:""
    })
    return (
        
        <>
            <button onClick={handleShow} className="btn"><i className="fa-solid fa-pen-to-square"></i></button>
            <Modal size='lg' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center">
                                <label>
                                    <input type="file" style={{ display: "none" }} />
                                    <img width={'100%'} src={`${BASE_URL}/uploads/${project.projectImage}`} alt="" />
                                </label>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div style={{ width: "90%" }} className='d-flex justify-content-center align-items-center flex-column'>
                                    <TextField className='w-100' id="standard-basic" label="project title" variant="standard" value={project.title}  />
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Language used" variant="standard" value={project.languages}/>
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Github" variant="standard" value={project.github}  />
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Website link" variant="standard" value={project.website}/>
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Project Overview" variant="standard" value={project.overview} />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}

export default EditProject