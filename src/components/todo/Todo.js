import React, { useState, useEffect } from 'react';
import TodoForm from './Form.js';
import TodoList from './List.js';
import useAjax from '../../hooks/ajax';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './todo.scss';

function ToDo() {
	const [list, setList] = useState([]);
	const [handleGet, handlePost, handlePut, handleDelete] = useAjax();

	const addItem = (item) => {
		// item._id = Math.random();
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

	const deleteItem = (id) => {
		let item = list.filter((i) => i._id === id)[0] || {};

		if (item._id) {
			handleDelete(id, () =>
				setList(
					list.filter((listItem) => {
						console.log(typeof listItem._id, typeof id);
						return listItem._id !== id;
					})
				)
			);
		}
	};

	useEffect(() => {
		handleGet((dataArray) => setList(dataArray));
	}, [handleGet]);

	useEffect(() => {
		let count = list.filter((item) => !item?.complete).length;
		document.title = `Todo App-${count} item(s) to complete`;
	}, [list]);

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
					<TodoList list={list} handleComplete={toggleComplete} handleDelete={deleteItem} />
				</section>
			</Container>
		</>
	);
}

export default ToDo;
