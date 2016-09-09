var p = new patientCollection();

var renderPatientFunc = function(){
	if (p.length < 1) {
		p.fetch().then(function(){
			console.log('pulling', p)
			var patients = p.toJSON()
			console.log(patients)
			$('#container').append('<div id="patientList"></div>')
			for (var i = 0; i < patients.length; i++) {
				$('#patientList').append('<li><h3>' + patients[i].firstName + ' ' + patients[i].lastName + '</h3></li>')
			}
			
			// var myPatientList = new PatientListView({collection: p})
			// $('#patientList').append(p.toJSON()[0].firstName)
			console.log(p.toJSON())
		})
		
		// $('#patientList').append(p.toJSON()[0].firstName)
	} else {
		console.log('pulled')
		var patients = p.toJSON()
		$('#container').append('<div id="patientList"></div>')
			for (var i = 0; i < patients.length; i++) {
				$('#patientList').append('<li><h3>' + patients[i].firstName + ' ' + patients[i].lastName + '</h3></li>')
			}
		// var myPatientList = new PatientListView({collection: p})
		// $('#patientList').append(p.toJSON()[0].firstName)
		// console.log(_.where(p.toJSON(), {firstName: 'Daneesh'}))
		// $('<p>' + _.where(p.toJSON(), {firstName: 'Daneesh'})[0].phone + '</p>').appendTo('#patientList').addClass('blue')

	}
}