import React from 'react'
import { Link } from 'react-router-dom'


function Header({insideDashboard}) {
  return (
    <div>
        <div className='bg-secondary p-4 mb-3 d-flex justify-content-between w-100'>
            <Link to={'/'} className='fs-4' style={{ textDecoration: "none", color: "white" }}>
            <i className="fa-brands fa-algolia fa-fade me-2"></i>
                Project File
            </Link>
            { insideDashboard &&
              <div>
              <button className='btn btn-success'>Logout</button>
            </div>
            }
        </div>
    </div>
  )
}

export default Header