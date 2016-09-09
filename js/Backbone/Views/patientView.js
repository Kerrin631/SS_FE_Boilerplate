var PatientView = Backbone.View.extend({
	tagName: 'li',
	template: _.template("<h1><%= firstName %> <%= lastName %>"),
	initialize: function(){
		this.render()
	},
	render: function(){
		this.$el.addClass('test').html()
		this.$el.html(this.template(this.model.toJSON()));
		return this;

	}
})

var PatientListView = Backbone.View.extend({
	el: '#patientList',
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty();
		this.collection.each(function(patients){
			var patientView = new PatientView({model: patients});
			this.$el.append(patientView.render().$el);
			// staggerTestClass();
		}, this)
	},
})
