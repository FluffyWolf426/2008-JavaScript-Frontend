// js here.
// link our css first

import 'bootstrap/dist/css/bootstrap.min.css'

//import the functions needed 
import { getAstronauts } from './api/astronaut' 
import { renderAstronautListItem } from './dom/astronaut'   

let astronautListElement = document.querySelector(".astronaut-list")

//make the api call and render the list items in the prom

getAstronauts().then((allAstronautData) => {
    console.log("successfully fetch")
    console.log(allAstronautData)

    //loop through the results and display listitems
    allAstronautData.results.map((astronautData) =>{
        renderAstronautListItem(
            astronautData,
            astronautListElement
        )
    })
})