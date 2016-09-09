var ContentTitleView = Backbone.View.extend({
	template: _.template('<h1> <%= title%></h1> <p> <%= information%></p>'),
	initialize: function(){
		this.render()
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
})

var contentRenderTitleView = Backbone.View.extend({
	el: '#aboutUs',
	initialize: function(){
		this.render()
	},
	render: function(){
		this.$el.empty();
		this.collection.each(function(content){
			var contentTitleView = new ContentTitleView({model: content});
			this.$el.html(contentTitleView.render().$el);
		}, this)
	}
})