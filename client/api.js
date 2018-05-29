const axios = require('axios');

// REST API helper functions
const api = {
	async getAllStudySpots() {
		try {
			const res = await axios.get('/api/studyspot');
			const studyspots = res.data;
			return studyspots;
		} catch (ex) {
			console.log(ex);
			alert('Error: Cannot retrieve study spots!');
		}
	},

	async getStudySpotById(id) {
		if (!id) {
			throw new Error('Invalid id!');
		}
		try {
			const res = await axios.get('/api/studyspot/' + id);
			const studyspots = res.data;
			return studyspots;
		} catch (ex) {
			console.log(ex);
			alert('Error: Cannot retrieve study spot with id ' + id);
		}
	},

	async createStudySpot(newStudySpot) {
		try {
			const res = await axios.post('/api/studyspot', newStudySpot);
			return res.data;
		} catch (ex) {
			console.log(ex);
			alert('Error: Cannot create new study spot!');
		}
	},

	async updateStudySpot(id, newStudySpot) {
		if (!id) {
			throw new Error('Invalid id!');
		}
		try {
			const res = await axios.put('/api/studyspot/' + id, newStudySpot);
			return res.data;
		} catch (ex) {
			console.log(ex);
			alert('Error: Cannot update study spot with id ' + id);
		}
	},

	async deleteStudySpot(id) {
		if (!id) {
			throw new Error('Invalid id!');
		}
		try {
			const res = await axios.delete('/api/studyspot/' + id);
			return res.data;
		} catch (ex) {
			console.log(ex);
			alert('Error: Cannot delete study spot with id ' + id);
		}
	}
}

module.exports = api;
