const collectionEl = document.querySelector('.collection')
const textInputEl = document.querySelector('.text')
const formEl = document.querySelector('.form')
const TODOS = JSON.parse(localStorage.getItem('todos')) || []

function createToDo(data) {
	while (collectionEl.firstChild) {
		collectionEl.firstChild.remove()
	}
	data.forEach(item => {
		const liEl = document.createElement('li')
		liEl.className = 'list'
		liEl.innerHTML = `<li class="list"><input ${
			item.status && 'checked'
		} required type="checkbox"> ${item.title}</li>`
		collectionEl.appendChild(liEl)
	})
}

window.addEventListener('load', () => {
	createToDo(TODOS)
})

formEl.addEventListener('submit', e => {
	e.preventDefault()
	let newTodo = {
		id: new Date().getTime(),
		title: textInputEl.value,
		status: false,
	}
	TODOS.push(newTodo)
	localStorage.setItem('todos', JSON.stringify(TODOS))
	createToDo(TODOS)
	textInputEl.value = ''
})
