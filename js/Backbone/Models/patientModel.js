var patientModel = Backbone.Model.extend({
	defaults: {
		apiKey: null,
		firstName: null,
		lastName: null,
		email: null,
		phone: null,
		streetAddress: null,
		city: null,
		state: null,
		zip: null,
		country: null,
		doctor: null,
		procedure: {
			procedureType: null,
			testimonial: null,
			beforeImg: null,
			afterImg: null
		}
	}
})