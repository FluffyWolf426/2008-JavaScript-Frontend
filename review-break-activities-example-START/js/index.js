/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

//git teh elements needed

let newTopicForm = document.querySelector(".new-topic-form")
let topicsList = document.querySelector(".topics-list")

const addTopicToPage = (topic) => {
    topicsList.innerHTML += `<li class="list-group-item">
    ${topic}
</li>`
}

newTopicForm.addEventListener("submit", (event) => {
    //prevent that default action of submiting the form elsewhere
    event.preventDefault()
   
    // the event.target in this case is the same as the newTopicForm
    let form = event.target
    //get the input element
    console.log(form.elements)
    let newTopicInput = form.elements["new-topic"]
    console.log(newTopicInput)

    //we're going to check if the value is empty or not, return early if so.

    if (newTopicInput.value === ""){
        newTopicInput.classList.add("is-invalid")
        return // this returns so that the rest of the fuction is not executed.
    }
    else{
        //seccessful case 
        newTopicInput.classList.remove("is-invalid")
    }
//we're going to add the topic to the page
addTopicToPage(newTopicInput.value)
newTopicForm.reset()
})