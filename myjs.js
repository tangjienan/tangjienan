

/* make sure jQuery is loaded

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}

*/

$(document).ready(function() {
	
   $('.effect').textillate();


	$("#left").on("click",function(){
		var str = "<a href='http://google.com'>Link to google</a>"
		$("#left").attr('data-title', str);
	});
});