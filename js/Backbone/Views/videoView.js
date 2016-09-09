var VideoView = Backbone.View.extend({
	// tagName: 'li',
	template: _.template('<video id="video"  controls> <source src="<%= mediaURL %>" type="video/mp4"/>'),
	initialize: function(){
		this.render()
	},
	render: function(){
		// console.log(this.model.toJSON())
		// this.$el.attr('id','nnn').addClass('test').html()
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
})
// var run = 1;
var VideoListView = Backbone.View.extend({
	el: '#videos',
	initialize: function(){
		this.render()
	},
	render: function(){
		this.$el.empty();
		this.collection.each(function(videos){
			console.log(videos)
			var videoView = new VideoView({model: videos});
			this.$el.html(videoView.render().$el);
		}, this)
	}
})