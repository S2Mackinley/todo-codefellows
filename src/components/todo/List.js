import React from 'react';

import Modal from 'react-bootstrap/Modal';
import { Toast, Badge, ListGroup } from 'react-bootstrap';

function TodoList(props) {
	return (
		<ListGroup>
			{props.list.map((item) => (
				<Toast
					className={`complete-${item.complete.toString()}`}
					key={item._id}
					onClose={() => {
						props.handleDelete(item._id, 'delete');
					}}
				>
					<Toast.Header>
						<Badge pill variant={item.complete ? 'success' : 'danger'}>
							{item.complete ? 'Pending' : 'Complete'}
						</Badge>
						{item.assignee}
					</Toast.Header>
					<Toast.Body
						onClick={() => {
							props.handleComplete(item._id, 'put');
						}}
					>
						{item.text}
						<div class="difficulty">Difficulty: {item.difficulty}</div>
					</Toast.Body>
				</Toast>
			))}
		</ListGroup>
	);
}

export default TodoList;
