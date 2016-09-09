var AppRouter = Backbone.Router.extend({
	routes: {
		"home": "viewHome",
		"notHome": "viewAway",
		"*other": "viewHome"
	},
	viewHome: function(){
		$(document.getElementById('container')).empty()
		$('#container').append('<div id="videos"></div>')
		vidInd = 0
		renderVideo()
		// renderClientFunc(),
		renderContentFunc()
		
	},
	viewAway: function(){
		// $(document.getElementById('header')).empty()
		$(document.getElementById('container')).empty()
		// $(document.getElementById('aboutUs')).empty()
		// $(document.getElementById('videos')).empty()
		renderPatientFunc()
	}
});



var router = new AppRouter();
Backbone.history.start({});

var NavView = Backbone.View.extend({
	events: {
		"click": "onClick"
	},
	onClick: function(e){
		var navButton = $(e.target);
		router.navigate(navButton.attr("data-url"), { trigger: true });
	}
})

var navView = new NavView({ el: '#nav' })

