 import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './action'
import {todos} from './state'

export let reducer = (state=todos, action) => {
	let newTodos 
	switch(action.type){
		case ADD_TODO:
			 return [...state, action.payload]
		case DELETE_TODO:
			newTodos = [...state]
			return newTodos = newTodos.filter(todo => todo.id !== action.payload)
		case UPDATE_TODO: 
			break
		default: 
			return state 
			
	}
}