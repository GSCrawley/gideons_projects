import React from 'react'
import data from './data'
import { Link, useParams } from 'react-router-dom'
import  './SelectedProject.css'

// {/* <SelectedProject url="" title=""/> */}

function SelectedProject(props) {
    const { index } = useParams()
    const place = data[index]

    console.log("props.url", props.url)
    console.log("place", place, index)
    
    return (
    <div className='project'>
      <img 
        alt="" 
        src={`${process.env.PUBLIC_URL}${place.image}`} 
        width="450" 
        height="auto" 
      />
      <h3>{place.title}</h3>
      <p>{place.desc}</p>
      <Link to='/'>Back to Home</Link>
      <a href={place.url}> Link to Project</a>
    </div>
  )
}

export default SelectedProject
