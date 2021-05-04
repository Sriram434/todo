import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Store/action'


function Todoinput() {
	let [name, setName] = useState(''); 
	let [date, setDate] = useState(''); 
	let [time, setTime] = useState(''); 
	let [user, setUser] = useState(''); 
	let [icon, setIcon] = useState(true)
	
	return(
		<div className='todo'>
			<div className='aside'></div> 
			<h2 className='icon '
					onClick={()=> setIcon(!icon)}>Task</h2>
			{icon ? 
			<form>	
				<div className='form-row task'> 	
					<div className="col-12">
						<label for="task">Task Description </label>
						<input type="text"
							className="form-control" 
							id='task'
							value={name}
							onChange={(e) => setName(e.target.value)}/>
					</div>	
					<div className="col-6">
						<label for="date">Date</label>
						<input type="date" 
							className="form-control" 
							id="date" 
							value={date}
							onChange={(e) => setDate(e.target.value)}
							/>
					</div>
					<div className='col-6'>
						<label for="time">Time</label>
						<input type='time'
							className="form-control" 
							id="time"
							value={time}
							onChange={(e)=> setTime(e.target.value)}
							/>	
					</div>
					<div className="col-12">
						<label for="user">Assign User</label>
						<input type="text" className="form-control" id="user"
							value={user}
							onChange= {(e) => setUser(e.target.value)}  />
					</div>
					
					<button type="button" className="btn btn-primary btn-sm m-3"> Cancel </button>
					<button type="button" className="btn btn-secondary btn-sm m-3"
						onClick={() => console.log(name,user )}
						>Save </button>
				</div>
				
			</form> : null }
		</div>
	)
}

export default Todoinput