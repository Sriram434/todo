import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Store/action'
import {v1 as uuid} from 'uuid'

function Todoinput() {
	let [name, setName] = useState();
    let dispatch = useDispatch();
	
	const todoHandler = () => {
		dispatch(addTodo({
			id: uuid(),
			name: name 
		}) )
		setName('')
	}
    return (
        <div>
            <div className="row m-2">
                <input                
					value={name}
					onChange={(e)=>setName(e.target.value)}
					type="text" className="col form-control"/>
                <button                
					onClick={() => todoHandler()}
                className="btn btn-primary mx-2">Add</button>
            </div>
        </div>
    )
}

export default Todoinput