$(document).ready(function() {
//Scope control Vars and functions here but fire them on the specific pageinit that calls for them.


});


// popuate the list of specials 
// expects data which should be an array of specials objects
function initSpecials(data){
	$('#dispList').empty();
	$("#dispList").append('<li data-role="list-divider">Specials Right Now!</li>');
	$(data).each(function(){
		$("#dispList").append('<li><a data-_id="' + this._id + '"><h3>' + this.title + '</h3><p>' + this.content + '</p><span class="ui-li-count">' + this.displayPrice + '</span></a></li>');
	});
	$('#dispList').listview('refresh');
	
	$("#dispList a").on("tap", function(){
		tarID = $(this).data("_id");
		populateDetail(tarID);
		$.mobile.changePage("#detail");
	});
}


// populate the detail page
// expects id which should be the id of a specific Special
function populateDetail(id){
	
	$(StaticData).each(function(){
		if(this._id == id){
			
			console.log('Data related to item tapped',this);
			$("#detail dl dt").html(this.title);
			$("#detail .content").html(this.content);
			$("#detail img").attr("src", this.imgSrc);
		}
	});
	
}

//Fire code as the individual page is ini'd rather than on Document.ready
$( '#home' ).on( 'pageinit',function(event){
	initSpecials(StaticData);
});

var StaticData = 	[{
						"_id"				: 1000,
						"title" 			: "Happy Hour",
						"content" 			: "$2 Tacos, Ritas, Dos Equis, 1800 Silver Shots",
						"displayPrice" 		: "$2",
						"startTime" 		: 1600,
						"duration" 			: 2,
						"imgSrc" 			: "http://muchoorlando.com/images/happy%20hour1.jpg"
					},
					{
						"_id"				: 1001,
						"title" 			: "Thursdays",
						"content" 			: "2 for 1 Jose Cuervo Ritas",
						"displayPrice" 		: "2 for 1",
						"startTime" 		: 1800,
						"duration" 			: -1,
						"imgSrc" 			: "http://muchoorlando.com/images/mucho-restaurant-thursday-special.gif"
					}]					