import axios from 'axios';

const useAjax = () => {
	const api = 'https://api-js401.herokuapp.com/api/v1/todo';

	const handleGet = (callback) => {
		axios.get(api).then((response) => {
			const dataArray = response.data.results;
			callback(dataArray);
		});
	};

	const handlePost = (data, callback) => {
		axios({
			method: 'post',
			url: api,
			mode: 'cors',
			cache: 'no-cache',
			headers: { 'Content-Type': 'application/json' },
			data: JSON.stringify(data),
		})
			.then((response) => {
				const newItem = response.data;
				callback(newItem);
			})
			.catch((err) => console.log(err));
	};

	const handlePut = (id, data, callback) => {
		axios({
			method: 'put',
			url: `${api}/${id}`,
			data: data,
		})
			.then((response) => {
				const updatedItem = response.data;
				callback(updatedItem);
			})
			.catch((err) => console.log(err));
	};

	const handleDelete = (id, callback) => {
		axios({
			method: 'delete',
			url: `${api}/${id}`,
		})
			.then((response) => {
				callback();
			})
			.catch((err) => console.log(err));
	};

	return [handleGet, handlePost, handlePut, handleDelete];
};

export default useAjax;
