// Cached element references for each element created with id.
// One for input, one for button, and one for ul element
const inputElement = document.querySelector("#myinput")
const buttonElement = document.querySelector("#mybutton")
const ulElement = document.querySelector("#todo-list")

console.dir(inputElement)
console.dir(buttonElement)
console.dir(ulElement)

//My event listener for Button velow
buttonElement.addEventListener('click', function(event){
  console.log('button working')
  let li = document.createElement('li')
  li.textContent = inputElement.value
  ulElement.appendChild(li)
  inputElement.value = ''
})
// We need to add an event listener to the button that listens to click events. When the button is clicked, we need to:
// - Create a new `li` element.
// - Set the text of the newly created `li` element to the text that the user has entered into the `input` element.
// - Reset the text in the `input` field to an empty string.
// - Add the new `li` element to the page, inside the `ul` element.

// Ben's psuedo code from lecture
// create <li> element
// access the text from the user's input
// store the text in the <li>
// add the <li> (with the text included) to HTML