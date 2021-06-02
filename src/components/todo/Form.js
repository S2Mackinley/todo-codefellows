import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function TodoForm(props) {
	const [item, setItem] = useState({});

	const handleInputChange = (e) => {
		setItem({ ...item, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		e.target.reset();
		props.handleSubmit(item);
		setItem(item);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h3>Add To Do Item</h3>
				<label>
					<span>To Do Item</span>
					<input name="text" placeholder="Item Details" onChange={handleInputChange} />
				</label>
				<label>
					<span>Assigned To</span>
					<input type="text" name="assignee" placeholder="Assignee Name" onChange={handleInputChange} />
				</label>
				<label>
					<input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
				</label>
				<Button type="submit">Add Item</Button>
			</form>
		</>
	);
}

export default TodoForm;
