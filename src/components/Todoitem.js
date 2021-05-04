import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo} from '../Store/action'


const Todoitem =  ({todo}) => {
	let dispatch = useDispatch()
	let [editable, setEditable] = useState(false)
	let [name, setName] = useState()
	return (
		<div>
			<div className='row mx-4 align-items-center'>
				<div m-1> { (todo.id.length) > 1 ? todo.id[2] : todo.id } </div>
				<div className='col m-1'> 
					{editable ? 
						<input value={name} onChange={(e) => setName(e.target.value)} />
						: <h4> {todo.name} </h4>  } 
				</div>
				<button 
					className='btn btn-primary m-1'
					onClick={() => { setEditable(!editable) }}
					> {editable ? 'update' : 'edit'} </button>
				<button 
					className='btn btn-danger m-1 '
					onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>	
			</div>
		</div>
	)
}

export default Todoitem 