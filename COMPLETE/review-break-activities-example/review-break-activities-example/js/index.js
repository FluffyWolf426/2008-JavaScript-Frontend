/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

// get the elements needed
let newTopicForm = document.querySelector(".new-topic-form")
let topicsList = document.querySelector(".topics-list")

const addTopicToPage = (topic) => {
    topicsList.innerHTML += `<li class="list-group-item">
        ${topic}
    </li>`
}

// add an event listener to the form.
newTopicForm.addEventListener("submit", (event)=> {
    // prevent that default action of submitting the form elsewhere.
    event.preventDefault()
    // the event.target in this case is the same as the newTopicForm
    let form = event.target
    // get the input element.
    let newTopicInput = form.elements["new-topic"]
    // we're going to check if the value is empty or not, return early if so.
    if (newTopicInput.value === "") {
        // error case
        newTopicInput.classList.add("is-invalid")
        return // this returns so that the rest of the function is not executed.
    } else {
        // successful case
        newTopicInput.classList.remove("is-invalid")
    }

    // we're going to add the topic to the page.
    addTopicToPage(newTopicInput.value)

    // reset the input values
    newTopicForm.reset()

})