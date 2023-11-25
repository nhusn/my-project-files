import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { allProjectsAPI } from '../services/allAPI'

function Projects() {
  const [allProject,setAllProject] = useState([])
  const [searchKey,setSearchKey] = useState("")
  const getAllProject = async ()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Conyent-Type":"application/json",
      "Authorization": `Bearer ${token}`
    }
    const result = await allProjectsAPI(searchKey,reqHeader)
    if(result.status===200){
      setAllProject(result.data)
    }else{
      console.log(result.response.data);
    }
  }
  
  useEffect(()=>{
    getAllProject()
  },[searchKey])
  return (
    <div className='w-100'>
      <Header/>
      <h1 className='text-center'>All Projects</h1>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <input type="text" className='form-control w-50' placeholder='Search Projects by Technologies' onChange={e=>setSearchKey(e.target.value)} />
        <i style={{marginLeft:"-40px"}} className='fa-solid fa-magnifying-glass fa-rotate-90'></i>
      </div>

      <Row className='mt-5 px-4 mb-4'>
        {allProject?.length>0? allProject?.map(project=>(
          <Col lg={4} md={6} sm={12}>
          <ProjectCard project={project}/>
        </Col>
        )): <p className='text-center fw-bolder text-danger fs-1'>Please Login</p>
        }
      </Row>
    </div>
  )
}

export default Projects