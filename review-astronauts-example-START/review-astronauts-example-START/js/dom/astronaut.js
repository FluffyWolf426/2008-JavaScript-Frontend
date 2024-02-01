/*
HTML of an astronaut list item.
replace the instances that have "THIS FORMAT HERE" with the astronautData.

<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="PROFILE THUMBNAIL HERE" class="rounded float-start" alt=""">    
        <h5 class="mb-1">ASTRONAUT NAME (ASTRONAUT STATUS HERE)</h5>
        <small class="float-end">born DATE OF BIRTH HERE</small>
    </div>
    <small>ASTRONAUT NATIONALITY HERE (ASTRONAUT AGENCY NAME)</small>    
    <p class="mb-1">ASTRONAUT BIO HERE </p>
</li>
*/

const renderAstronautListItem = (data, listElement) =>{
    let {name,
         status,
         profile_image_thumbnail,
         date_of_birth,
         nationality,
         agency,
         bio
         
        } = data
    listElement.innerHTML += `<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="${profile_image_thumbnail}" class="rounded float-start" alt=""">    
        <h5 class="mb-1">${name} (${status.name})</h5>
        <small class="float-end">born ${date_of_birth}</small>
    </div>
    <small>${nationality} (${agency.abbrev})</small>    
    <p class="mb-1">${bio} </p>
</li>`
}

export {renderAstronautListItem}