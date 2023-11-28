import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { BASE_URL } from '../services/baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI, editUserAPI } from '../services/allAPI';

function Profile() {
    const [open, setOpen] = useState(false);
    const [userProfile, setUserProfile] = useState({
        username: "", email: "", password: "", profile: "", github: "", linkedin: ""
    })
    const [existingImage, setExistingImage] = useState("")
    const [preview, setPreview] = useState("")

    const handleProfileUpdate = async ()=>{
        const {username,email,password,profile,github,linkedin} = userProfile
        if(!github || !linkedin){
            toast.info("Please fill the form completely")
        }else{
            const reqbody = new FormData()
            reqbody.append("username", username)
            reqbody.append("email", email)
            reqbody.append("password", password)
            reqbody.append("github", github)
            reqbody.append("linkedin", linkedin)
            preview?reqbody.append("profileImage",profile):reqbody.append("profileImage",existingImage)

            const token = sessionStorage.getItem("token") 
            if(preview){
                const reqHeader={
                    "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
                }
                const result = await editUserAPI(reqbody,reqHeader)
                if(result.status===200){
                    setOpen(!open)
                    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                }else{
                    toast.error(result.response.data)
                    setOpen(!open)
                    console.log(result);
                }
            }else{
                const reqHeader={
                    "Content-Type":"application/json","Authorization":`Bearer ${token}`
                }
                const result = await editUserAPI(reqbody,reqHeader)
                if(result.status===200){
                    setOpen(!open)
                    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                }else{
                    toast.error(result.response.data)
                    setOpen(!open)
                    console.log(result);
                }
            }
        }
    }

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setUserProfile({
            ...userProfile, username: user.username, email: user.email, password: user.password, profile: user.profile, github: user.github, linkedin: user.linkedin
        })
        setExistingImage(user.profile)
    }, [])

    useEffect(() => {
        if (userProfile.profile) {
            setPreview(URL.createObjectURL(userProfile.profile))
        } else {
            setPreview("")
        }
    }, [userProfile.profile])

    return (
        <div style={{ width: '95%' }} className='border rounded shadow p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h3>My Profile</h3>
                <i onClick={() => setOpen(!open)} className="fa-solid fa-caret-down"></i>
            </div>
            <Collapse in={open}>
                <div className="row justify-content-center mt-3">
                    {/* upload pic */}
                    <label className='text-center roundeded-5'>
                        <input style={{ display: 'none' }} type="file" onChange={e => setUserProfile({ ...userProfile, profile: e.target.files[0] })} />
                        {
                            existingImage != "" ? 
                            <img width={'200px'} height={'200px'} className='rounded circle' src={preview ? preview :`${BASE_URL}/uploads/${existingImage}`} alt="upload picture" /> 
                            : <img width={'200px'} height={'200px'} className='rounded circle' src={preview ? preview : "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"} alt="upload picture" />
                        }
                    </label>
                    <div className='mt-3'>
                        <input type="text" className='form-control' placeholder='Github' onChange={e=>setUserProfile({...userProfile,github:e.target.value})}/>
                    </div>
                    <div className='mt-3'>
                        <input type="text" className='form-control' placeholder='LinkedIn' onChange={e=>setUserProfile({...userProfile,linkedin:e.target.value})}/>
                    </div>
                    <div className="mt-3 text-center d-grid">
                        <button className='btn btn-warning' onClick={handleProfileUpdate}>Update</button>
                    </div>
                </div>
            </Collapse>
            <ToastContainer autoClose={2000} theme="colored" position="top-right"/>
        </div>
    )
}

export default Profile