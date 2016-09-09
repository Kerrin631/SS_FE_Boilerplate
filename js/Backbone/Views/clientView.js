var ClientView = Backbone.View.extend({
	tagName: 'p',
	template: _.template('<strong><%= firstName%> <%= lastName%>'),
	initialize: function(){
		this.render()
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this
	}
})

var renderClientView = Backbone.View.extend({
	el: '#header',
	initialize: function(){
		this.render()
	},
	render: function(){
		this.$el.empty();
		this.collection.each(function(client){
			var clientView = new ClientView({model: client});
			this.$el.append(clientView.render().$el);
		}, this)
	},
})

