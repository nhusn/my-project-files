import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { allProjectsAPI } from '../services/allAPI'

function Projects() {
  const [allProject,setAllProject] = useState([])
  const getAllProject = async ()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Conyent-Type":"application/json",
      "Authorization": `Bearer ${token}`
    }
    const result = await allProjectsAPI(reqHeader)
    if(result.status===200){
      setAllProject(result.data)
    }else{
      console.log(result.response.data);
    }
  }
  
  useEffect(()=>{
    getAllProject()
  },[])
  return (
    <div className='w-100'>
      <Header/>
      <h1 className='text-center'>All Projects</h1>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <input type="text" className='form-control w-50' placeholder='Search Projects by Technologies'  />
        <i style={{marginLeft:"-40px"}} className='fa-solid fa-magnifying-glass fa-rotate-90'></i>
      </div>

      <Row className='mt-5 container mb-4'>
        {allProject?.length>0 ? allProject?.map(project=>(
          <Col lg={4} md={6} sm={12}>
          <ProjectCard project={project}/>
        </Col>
        )):null}
      </Row>
    </div>
  )
}

export default Projects