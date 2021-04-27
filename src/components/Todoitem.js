import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo} from '../Store/action'


const Todoitem =  ({todo}) => {
	let dispatch = useDispatch()
	return (
		<div>
			<div className='row mx-4 align-items-center'>
				<div m-1> { todo.id } </div>
				<div className='col m-1'> <h4> {todo.name}</h4> </div>
				<button 
					className='btn btn-primary m-1'> Edit </button>
				<button 
					className='btn btn-danger m-1 '
					onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>	
			</div>
		</div>
	)
}

export default Todoitem 