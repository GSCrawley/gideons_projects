import React from 'react'
import './PageFooter2.css'

var currentTime = new Date()
var year = currentTime.getFullYear()

function PageFooter2() {
    return (
    <div className="PageFooter2">
    <header>
    <h4>Gideon Crawley &copy; <span id= {year}></span> 2020</h4>
    </header>
    </div>
    )
   }

   export default PageFooter2