$( document ).ready(function() {
		getdate();
	$(".portfolio").click(function() {
		$(".gallery").slideToggle("slow");
	});
		$(".gallery").toggle();

});

function getdate (){
var today = new Date()
var year = today.getFullYear()
document.getElementById('yr').innerHTML = year;
}