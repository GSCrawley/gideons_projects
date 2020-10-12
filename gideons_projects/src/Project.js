import { Link } from 'react-router-dom'
import React from 'react'
import './Project.css'

function Project({ image, title, link, index}) {
    return (
        <div className='projects'>
            <div className="ProjectImage">
                <div className="ProjectTitle">
                    <div className="ProjectLink">
                        <img 
                            alt="" 
                            src={`${process.env.PUBLIC_URL}${image}`} 
                            width="300" 
                            height="auto" 
                        />
                        <h3>{title}</h3>
                        <Link to={link}>Project Details</Link>
                    </div>
                </div>
            </div>
        </div>
        )
   }

export default Project