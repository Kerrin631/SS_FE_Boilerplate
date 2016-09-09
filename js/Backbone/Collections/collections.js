// --------------------CLIENTS
var clientCollection = Backbone.Collection.extend({
	model: clientModel,
	url: 'http://localhost:8000/client/getSingleClientInfo/' + apiKey,
	parse: function(data){
		return data.client
	}
})


// --------------------LOCATIONS
var locationCollection = Backbone.Collection.extend({
	model: locationModel,
	url: 'http://localhost:8000/client/getSingleClientInfo/' + apiKey,
	parse: function(data){
		return data.location
	}
})


// ------------------PATIENTS
var patientCollection = Backbone.Collection.extend({
	model: patientModel,
	url: 'http://localhost:8000/client/getSingleClientInfo/' + apiKey,
	parse: function(data){
		return data.patient
	}
})

// ------------------Procedures
var procedureCollection = Backbone.Collection.extend({
	model: patientModel,
	url: 'http://localhost:8000/client/getSingleClientInfo/' + apiKey,
	parse: function(data){
		console.log(data.patient)
		return data.patient.procedure
	}
})

// ------------------CONTENT
var contentCollection = Backbone.Collection.extend({
	model: contentModel,
	url: 'http://localhost:8000/client/getSingleClientInfo/' + apiKey,
	parse: function(data){
		// console.log(data.content)
		return data.content
	}
})


// --------------------MEDIA/Images
var imageCollection = Backbone.Collection.extend({
	model: mediaModel,
	url: 'http://localhost:8000/client/getSingleClientInfo/' + apiKey,
	parse: function(data){
		var images = _.where(data.media, {type : 'Image'})
		return images
	}
})


// --------------------MEDIA/Videos
// var vidInd = 0;
var videoCollection = Backbone.Collection.extend({
	model: mediaModel,
	url: 'http://localhost:8000/client/getSingleClientInfo/' + apiKey,
	parse: function(data){
		var videos = _.where(data.media, {type : 'Video'})
		// if (vidInd < videos.length) {
			console.log('pulling')
			return videos
		// } else {
			// console.log('ehh')
			// vidInd = 0
			// return videos
		// }
		
	},
})



