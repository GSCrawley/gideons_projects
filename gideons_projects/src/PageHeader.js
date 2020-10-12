import React from 'react'
import './PageHeader.css'

// place photo in upper left hand corner, make font smaller on links and less space in between them, put a little blurb about yourself
function PageHeader() {
    return (
    <div className="PageHeader">
        <header>
            <img 
            alt="" 
            src={`${process.env.PUBLIC_URL}${'/images/me.png'}`} 
            width="175" 
            height="auto" 
            />
            <h1>Gideon Crawley, Front-End Web Developer</h1>
            <h3><a href ='http://www.github.com/GSCrawley'><i class="fab fa-github-square"></i></a>
            <a href ='http://www.linkedIn.com/in/GSCrawley'><i class="fab fa-linkedin"></i></a>
            <a href ='https://medium.com/@gideonscrawley'><i class="fab fa-medium"></i></a></h3>
        </header>
    </div>
    )
   }
 
export default PageHeader