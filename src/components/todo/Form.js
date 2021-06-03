import React, { useState } from 'react';
import useForm from '../../hooks/form.js';

import Button from 'react-bootstrap/Button';

function TodoForm(props) {
	const [item, setItem] = useState({});
	const [handleSubmit, handleChange, values] = useForm(formSubmit);

	function formSubmit(item) {
		props.handleSubmit(item);
		const newItem = {};
		setItem(newItem);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h3>Add To Do Item</h3>
				<label>
					<span>To Do Item</span>
					<input name="text" placeholder="Item Details" onChange={handleChange} />
				</label>
				<label>
					<span>Assigned To</span>
					<input type="text" name="assignee" placeholder="Assignee Name" onChange={handleChange} />
				</label>
				<label>
					<input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
				</label>
				<Button type="submit">Add Item</Button>
			</form>
		</>
	);
}

export default TodoForm;
