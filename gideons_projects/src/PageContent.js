import data from './data'
import React from 'react'
import Project from './Project'
import './PageContent.css'


function PageContent() {
    return (
    <div className="projects">
    {
      // place is the element in the array
      // i is the index of the element
      data.map((place, i) => { // data takes a function as a parameter
        return ( // Return a component
        <Project 
          key={`${i}-${place.image}`} 
          title={place.title} 
          image={place.image} 
          link={`${i}`} 
          index={i}
        />
      )
    })
   }
   </div>
)
}

export default PageContent
