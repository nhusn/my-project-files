import { TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PlaceImg from '../Asset/image.png'

function AddProjects() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <div className="col-lg-6">
                                <img width={'100%'} src={PlaceImg} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <div style={{ width: "90%" }} className='d-flex justify-content-center align-items-center flex-column'>
                                    <TextField className='w-100' id="standard-basic" label="project title" variant="standard" />
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Language used" variant="standard" />
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Github" variant="standard" />
                                    <TextField className='w-100 mt-3' id="standard-basic" label="Project Overview" variant="standard" />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
       </>
    )
}

export default AddProjects