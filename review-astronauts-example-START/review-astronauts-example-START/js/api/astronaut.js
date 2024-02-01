const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

// api functions here.

const getAstronauts = async () => {
    //make the reqest to the back 
    const response = await fetch(`${BASE_URL}/astronaut`)
    //parse response 
    const data =await response.json()
    return data 
}



export {getAstronauts}