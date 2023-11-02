import React from 'react'
import Header from '../Components/Header'
import Profile from '../Components/Profile'
import MyProjects from '../Components/MyProjects'

function Dashboard() {
  return (
    <div>
      <Header insideDashboard/>
      <div style={{marginTop:"100px"}} className="row d-flex container-fluid">
      <h1>Welcome <span className='text-warning'>User</span></h1>
            <div className='col-lg-8'>
              <MyProjects/>
            </div>
            <div className='col-lg-4 '><Profile/></div>
        </div>
    </div>
  )
}

export default Dashboard