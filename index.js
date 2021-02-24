// const name = 'Matt'
// console.log(name)

const headingOne = document.querySelector('h1')
// console.log(headingOne)
headingOne.style = 'color: red; text-decoration: underline;'

const paragraph = document.getElementById('some-text')
// console.log(paragraph)

// console.log(paragraph.innerText)
paragraph.innerText = 'I am new text given by JS'
// console.log(paragraph.innerText)

// console.log(paragraph.className)
paragraph.className = 'some-class'
// console.log(paragraph.className)

paragraph.classList.add('new-class')
// console.log(paragraph.className)

// paragraph.classList.remove('new-class')
// console.log(paragraph.className)

paragraph.classList.toggle('new-class')
// console.log(paragraph.className)

const unorderedList = document.querySelector('#unordered-list')
// console.log(unorderedList)

unorderedList.innerHTML = '<li>New Item</li>'

const listItems = document.getElementsByTagName('li')
// console.log(listItems)

const classItems = document.querySelectorAll('.ordered-item')
// console.log(classItems)

const inputOne = document.getElementById('some-input')
// console.log(inputOne.value)
let inputValue = ''

const userInputDisplay = document.querySelector('#user-input')

inputOne.addEventListener('keypress', function(event){
    // console.log(event)
    inputValue = event.target.value
    userInputDisplay.innerText = inputValue
})

function clickMe(){
    console.log('I have been clicked')
}

document.querySelector('#child').addEventListener('click', function(event){
    event.stopPropagation()
    console.log('Child button element event invoked')
})

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
    console.log('Default event prevented')
    // functionality submit form here
})


// * MINI-PROJECT CODE * //

// Logic
// User can type todo into the input
// When user clicks add, todo is added to the list below the input
// When user clicks a todo, it removes it from the list

const todoInput = document.getElementById('todo-input')
let todoInputValue = ''

todoInput.addEventListener('change', function(event){
    todoInputValue = event.target.value
})

function createTodo(){
    // 1. create a list item
    // 2. give li text content from todoInputValue
    // 3. add an event to li to allow the user to remove it
    // 4. attach element to the ul

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInputValue

    newTodo.addEventListener('click', function(){
        newTodo.remove()
    })

    document.querySelector('#task-list').appendChild(newTodo)

    todoInput.value = ''
    todoInputValue = ''
}