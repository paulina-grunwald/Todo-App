// Takes the text from AddTodo field and returns 
//proper “Action” JSON to send to other components.

export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text,
		completed: false
	}
}