import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        <div className='bg-secondary p-4 mb-3'>
            <Link to={'/'} className='fs-4' style={{ textDecoration: "none", color: "white" }}>
            <i class="fa-brands fa-algolia fa-fade me-2"></i>
                Project File
            </Link>
        </div>
    </div>
  )
}

export default Header