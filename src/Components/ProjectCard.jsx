import React, { useState } from 'react';
import { Card, Modal, Col, Row, Button } from 'react-bootstrap';
import projectPic from '../Assets/mediaPlayer.png';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../services/baseUrl';


function ProjectCard({ project }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {project &&
        <Card className='shadow mb-3 ' onClick={handleShow}>
          <Card.Img variant="top" src={project ? `${BASE_URL}/uploads/${project?.projectImage}` : projectPic} />
          <Card.Body>
            <Card.Title className='text-center'>{project.title}</Card.Title>
          </Card.Body>
        </Card>
      }
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img className='w-100' src={project ? `${BASE_URL}/uploads/${project?.projectImage}` : projectPic} alt="" />
            </Col>
            <Col md={6}>
              <h2>{project.title}</h2>
              <p>Project Overview: <span className='text-success'>{project.overview}</span></p>
              <p>Language used:<span className='fw-bolder text-danger'>{project.languages}</span></p>
            </Col>
          </Row>
          <div className='d-flex mt-3' style={{ gap: "10px"}}>
            <Link to={project.github}><i className="fa-brands fa-github fa-2x"></i></Link>
            <Link to={project.website}><i className="fa-solid fa-globe fa-2x"></i></Link>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default ProjectCard