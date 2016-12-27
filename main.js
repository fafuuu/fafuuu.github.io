var redditContainer = document.getElementById("reddit-info");
var redditbtn = document.getElementById("reddit");

redditbtn.addEventListener("click", function() {
var redditRequest = new XMLHttpRequest();
redditRequest.open('GET', 'placeholder.json');
redditRequest.onload = function() {
  var redditData = JSON.parse(redditRequest.responseText);
  renderHTML(redditData);
};

redditRequest.send();
});



$(document).ready(function(){
	$('#sidebar-btn').click(function(){
	    $('#sidebar').toggleClass('visible');
	});
    });





function renderHTML(data) {
 var htmlString = data[0].name + " " + data[0].link + " ";
 redditContainer.insertAdjacentHTML('beforeend',htmlString);

}



