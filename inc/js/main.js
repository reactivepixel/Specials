$(document).ready(function() {
	
	//Scope control Vars and functions here but fire them on the specific pageinit that calls for them.


});


	tempist = function (){
		
		console.log("You are browser's agent: ", navigator.userAgent);

	}
	//Fire code as the individual page is ini'd rather than on Document.ready
	$( '#home' ).on( 'pageinit',function(event){
  		tempist();
	});