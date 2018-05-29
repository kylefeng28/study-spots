// Import libraries
const Vue = require('vue');
const axios = require('axios');
const api = require('./api'); // import from ./api.js

// Initialize Vue
const app = new Vue({
	el: '#app', // use the element with id 'app' as our container for our app
	data: {
		studySpots: [],
		newStudySpot: {}
	},

	methods: {
		refresh: async function() {
			this.studySpots = await api.getAllStudySpots();
		},
		clearNewStudySpot: function() {
			this.newStudySpot = {
				name: 'Name goes here',
				description: 'Description goes here',
			}
		},
		addNewStudySpot: async function() {
			try {
				const res = await api.createStudySpot(this.newStudySpot);
				this.refresh();
			} catch (ex) {
				console.log(ex);
				alert('Error adding new study spot!')
			}
		},
		deleteStudySpot: async function(id) {
			try {
				// Ask for confirmation
				if (confirm('Are you sure you want to delete this study spot?')) {
					const res = await api.deleteStudySpot(id);
					this.refresh();
				}
			} catch (ex) {
				console.log(ex);
				alert('Error deleting study spot!')
			}
		}
	},

	mounted: async function() {
		this.refresh();
		this.clearNewStudySpot();
	}
});

// Global exports
window.axios = axios;
window.api = api;
window.app = app;
window.Vue = Vue;
