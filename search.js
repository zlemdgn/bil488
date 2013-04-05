$(function (){
   
	 $('#search').click(
			 function() {			
		 
	        searchfunction();
	     
	 });
	
});




function searchfunction()
{	
	var qu = $('#query').val();
	var query = encodeURIComponent(qu);
	
	$.getJSON("http://search.twitter.com/search.json?q="+query+"&rpp=5&callback=?", 
			
	function(tweets){
	var $tweets = $('<ul>') ;
	 
	for(var i = 0; i < 5; i++){ 
		
		var tweet = tweets.results[i], 
		$tweet = $('<li>');	

		$('<a/>', {
		href: 'http://twitter.com/' + tweet.from_user,
		html: '<img src="' + tweet.profile_image_url + '"/>'
		}).appendTo($tweet);
	
		$('<span>', {
		className: 'content',
		html: '<strong>' + tweet.from_user_name+ '  <a href="http://twitter.com/' +tweet.from_user + '">@' + tweet.from_user + '</a> (' +tweet.created_at+ ') <br>' + tweet.text + '</strong>'
		}).appendTo($tweet);
		
		$tweet.appendTo($tweets);
		}
	
		$('.twitter-posts').html('');
	
		$tweets.appendTo('.twitter-posts');
	 
		
		
	});
	
	}
