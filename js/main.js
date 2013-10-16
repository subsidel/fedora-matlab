function update() {
  $.get("php/feed.php", function(data) {
    $("#feed").html(data);
  });
}

function updateRepeating() {
	update();
    window.setTimeout(updateRepeating, 10000);
}

function uploadBoat(){

	var user_post = new Array();

	var post_details = {
		posttext: $("#posttext").val(),
	}

	user_post.push(post_details);
	console.log(post_details);

	var json = JSON.stringify(user_post);

	$.ajax({
		url:"php/post.php",
		type:"POST",
		data: {
			post_details: json
		},
		success:function (data) {
			//window.location.href = "index.php"
		}
	});
}

function upboat(feedid) {
	$.post(
	  "php/vote.php",
	  {
		  data: data,
		  direction: "up",
		  id: feedid
	}).done(update());

}

function downboat(feedid) {
	$.post(
	  "php/vote.php",
	  {
		  data: data,
		  direction: "down",
		  id:feedid
	}).done(update());
}