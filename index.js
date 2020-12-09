// const name = 'Matt';
// console.log(name)

const headingOne = document.querySelector('h1');
// console.log(headingOne)
headingOne.style = 'color: red; text-decoration: underline;';

const paragraph = document.getElementById('some-text')
// console.log(paragraph)
// console.log(paragraph.innerText)
paragraph.innerText = 'I am new text given by JS';
// console.log(paragraph.className);
paragraph.className = 'some-class';
// console.log(paragraph.className);

paragraph.classList.add('new-class');
// console.log(paragraph.className)

paragraph.classList.remove('new-class');
// console.log(paragraph.className);

paragraph.classList.toggle('new-class');
// console.log(paragraph.className)

const listItems = document.getElementsByTagName('li');
// console.log(listItems)
// console.log(listItems[0].innerText)

document.getElementById('unordered-list').innerHTML = '<li>New Item</li>';

const classItems = document.querySelectorAll('.ordered-item');
// console.log(classItems)

const someInput = document.getElementById('some-input');
let inputValue = '';

const userInputDisplay = document.getElementById('user-input');

someInput.addEventListener('keypress', function(event){
    // console.log(event)
    inputValue = event.target.value;
    userInputDisplay.innerText = inputValue;
})

function clickMe(){
    // alert('I have been clicked');
    console.log('I have been clicked');
}

document.querySelector('#child').addEventListener('click', function(event){
    event.stopPropagation();
    console.log('Child button event invoked')
})

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Default event prevented')
})

/// * MINI PROJECT CODE * ///

const todoInput = document.getElementById('todo-input');
let todoInputValue = '';

todoInput.addEventListener('change', function(event){
    todoInputValue = event.target.value;
})

function createTodo(){
    //1. create a list item
    //2. give li text content from the input above
    //3. add an event to the li that allows the user to remove it
    //4. attach the element to the ul

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInputValue;

    newTodo.addEventListener('click', function(){
        newTodo.remove();
    })

    document.querySelector('#task-list').appendChild(newTodo);
    todoInput.value = '';
    todoInputValue = '';
}