import React from 'react'
import {useSelector} from 'react-redux'
import Todoitem from './Todoitem'

function Todolist() {
    let todos = useSelector(state => state);

    return (
        <div className="my-4">
            {todos.map(todo => <Todoitem key={todo.id} todo={todo} /> )}
        </div>
    )
}

export default Todolist 