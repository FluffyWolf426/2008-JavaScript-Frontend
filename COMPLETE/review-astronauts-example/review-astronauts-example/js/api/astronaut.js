const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

// api functions here.

const getAstronauts = async () => {
  // make the request to the backend
  const response = await fetch(`${BASE_URL}/astronaut`)
  // parse response
  const data = await response.json()

  return data
}

/*
If you want to write this as a promise it would be like below.
const getAstronauts =  () => {
  return fetch(url).then(`${BASE_URL}/astronaut`)=> {
    return response.json() a promise
  }).then((data)=> {
    return data// concrete 
  })
}
*/

export {getAstronauts}
