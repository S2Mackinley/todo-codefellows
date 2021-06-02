import React, { useState, useEffect } from 'react';
import TodoForm from './Form.js';
import TodoList from './List.js';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './todo.scss';

function ToDo() {
	const [list, setList] = useState([]);

	const addItem = (item) => {
		item._id = Math.random();
		item.complete = false;
		setList([...list, item]);
	};

	const toggleComplete = (id) => {
		let item = list.filter((i) => i._id === id)[0] || {};

		if (item._id) {
			item.complete = !item.complete;
			let newList = list.map((listItem) => (listItem._id === item._id ? item : listItem));
			setList(newList);
		}
	};

	useEffect(() => {
		let list = [
			{ _id: 1, complete: true, text: 'Clean the bedroom.', difficulty: 3, assignee: 'Person A' },
			{ _id: 2, complete: true, text: 'Do the laundry and fold it.', difficulty: 2, assignee: 'Person A' },
			{ _id: 3, complete: false, text: 'Take the dog for a nice long walk.', difficulty: 4, assignee: 'Person B' },
			{
				_id: 4,
				complete: true,
				text: 'Run to the store and grab eggs and milk for breakfast.',
				difficulty: 3,
				assignee: 'Person C',
			},
		];

		setList(list);
	}, []);

	return (
		<>
			<Navbar bg="primary" className="mb-4" variant="dark">
				<Navbar.Brand href="#">&nbsp; &nbsp; Home</Navbar.Brand>
			</Navbar>
			<Container>
				<h3 className="bg-dark text-light p-3">To Do List Manager ({list.filter((item) => item.complete).length})</h3>
			</Container>
			<Container>
				<section className="todo">
					<div>
						<TodoForm handleSubmit={addItem} />
					</div>
					<TodoList list={list} handleComplete={toggleComplete} />
				</section>
			</Container>
		</>
	);
}

export default ToDo;
