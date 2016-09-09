var c = new clientCollection();
var content = new contentCollection();
var videos = new videoCollection();

// $(document).ready(function(){
// 	$('#container').append('<div id="videos"></div>')	
// })



var renderClientFunc = function(){
	if (c.length < 1) {
		c.fetch().then(function(){
			console.log(c)
			var client = new renderClientView({collection: c})
			$('#header').append(c.toJSON()[0].phone)
		})
	} else {
		var client = new renderClientView({collection: c})
		$('#header').append(c.toJSON()[0].phone)
		console.log('already pulled')
	}
}




var renderContentFunc = function(){
	if (content.length < 1) {
		content.fetch().then(function(){
			var contentInfo = content.toJSON()
			console.log(contentInfo)
			console.log(_.where(contentInfo, {title: 'About My Practice'})[0])
			$('#container').append('<div id="aboutUS"></div>')
			$('#aboutUS').append('<h1>' + _.where(contentInfo, {title: 'About My Practice'})[0].title + '</h1>')
			$('#aboutUS').append('<p>' + _.where(contentInfo, {title: 'About My Practice'})[0].information + '</p>')
			// var myContentTitleList = new contentRenderTitleView({collection: content})
		})
	} else {
		var contentInfo = content.toJSON()
		$('#container').append('<div id="aboutUS"></div>')
		$('#aboutUS').append('<h1>' + _.where(contentInfo, {title: 'About My Practice'})[0].title + '</h1>')
		$('#aboutUS').append('<p>' + _.where(contentInfo, {title: 'About My Practice'})[0].information + '</p>')
		// var myContentTitleList = new contentRenderTitleView({collection: content})
		console.log('Pulled already')
	}
}



var vidInd = 0

var renderVideo = function(){
	if (videos.length < 1) {
		videos.fetch().then(function(){
			console.log(videos)
			getVideo(videos)
			document.getElementById("video").setAttribute('autoplay', true);
		})
	} else {
		console.log(videos, 'hi')
		getVideo(videos)
		console.log('Pulled already', vidInd)
		document.getElementById("video").setAttribute('autoplay', true);
	}
}




var space = false;
$(function() {
  $(document).keyup(function(evt) {
    if (evt.keyCode == 32) {
      space = false;
      console.log(false)
    }
  }).keydown(function(evt) {
    if (evt.keyCode == 32) {
      space = true;
      $(document.getElementById('videos')).empty()
      renderVideo()
      console.log('space')
    }
  });
});

var getVideo = function(videos){
	console.log(videos)
	// console.log(videos.toJSON())
	if (vidInd < videos.toJSON().length){
		// $('#container').append('<div id="videos"></div>')
		$('#videos').append('<video id="video"  controls> <source src=' + videos.toJSON()[vidInd].mediaURL + '/>')
		vidInd ++
	} else {
		vidInd = 0
		console.log(vidInd)
		// $('#container').append('<div id="videos"></div>')
		$('#videos').append('<video id="video"  controls> <source src=' + videos.toJSON()[vidInd].mediaURL + '/>')
		vidInd ++
	}
}




