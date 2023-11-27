import React, { useContext, useEffect, useState } from 'react'
import AddProjects from './AddProjects'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteProjectAPI, userProjectAPI } from '../services/allAPI';
import { addProjectResponseContext, updateProjectResponseContext } from '../Contexts/ContextShare';
import EditProject from './EditProject';

function MyProjects() {
    const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)
    const {updateProjectResponse,setUpdateProjectResponse}=useContext(updateProjectResponseContext)
    const [userProjects,setUserProject]=useState([])
    const getUserProjects = async ()=>{
        if(sessionStorage.getItem("token")){
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Conyent-Type":"application/json",
                "Authorization": `Bearer ${token}`
              }
            const result = await userProjectAPI(reqHeader)
            if(result.status===200){
                setUserProject(result.data)
            }else{
                console.log(result);
            }
        }
    }
    const handleDelete = async (id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader={
            "Conyent-Type":"application/json",
            "Authorization": `Bearer ${token}`
        }
        const result = await deleteProjectAPI(id,reqHeader)
        if (result.status===200){
            // reload page
            getUserProjects()
        }else{
            toast.error(result.response.data)
        }
    }

    useEffect(()=>{
        getUserProjects()
    },[addProjectResponse,updateProjectResponse])
  return (
    <div className='card shadow p-3 '>
        <div className="d-flex">
            <h3>My Projects</h3>
            <div className="ms-auto">
                <AddProjects/>
            </div>
        </div>
            <div className="mt-4">
                {userProjects?.length>0 ?
                userProjects.map(project=>(
                    <div className="border d-flex align-items-center rounded p-2 mb-2">
                    <h5>{project.title}</h5>
                    <div className="icon ms-auto d-flex flex-wrap">
                        <EditProject project={project}/>
                        <a href={project.github} target='_blank' className="btn"><i className="fa-brands fa-github"></i></a>
                        <button className="btn" onClick={()=>handleDelete(project._id)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
                ))
                : <p>Nothing to dispaly</p>
                }
            </div>
            <ToastContainer autoClose={2000} theme="colored" position="top-right"/>
    </div>
  )
}

export default MyProjects