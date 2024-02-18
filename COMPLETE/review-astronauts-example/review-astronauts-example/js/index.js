// link our css first
import 'bootstrap/dist/css/bootstrap.min.css'

// import the functions needed
import { getAstronauts } from './api/astronaut'
import { renderAstronautListItem } from './dom/astronaut'

let astronautListElement = document.querySelector(".astronaut-list")


// make the api call and render the list items in the prom.
getAstronauts().then((allAstronautData)=> {
  // loop through the results and display listitems
  allAstronautData.results.map((astronautData)=> {
    renderAstronautListItem(
      astronautData,
      astronautListElement
    )
  })
})

/*
// async await way of doing things

const renderApp = async () => {
  const allAstronautData = await getAstronauts()

  allAstronautData.results.map((astronautData)=> {
    renderAstronautListItem(
      astronautData,
      astronautListElement
    )
  })
}

renderApp()

*/