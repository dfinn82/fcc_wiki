//var search = "baseball";
//var sBox = document.getElementById("search");

// $("input[type='text']").keypress(function(e){
//         if ( e.which === 13){
// 	    var todoText = $(this).val();
// 	    $(this).val("");
// 	    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>")
// 		}
//     });

var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="; 
var gData = [];

$("#search").keypress(function(e){
        if ( e.which === 13){
	    url += $(this).val();
	    $(this).val("");
	    console.log(url);
	    $.ajax( {
	        url: url,
	        dataType: 'jsonp',
	        type: 'GET',
	        async: false,
	        headers: { 'Api-User-Agent': 'dfinn82_fcc_v1' },
	        success: function(data) {
			for ( var i = 0; i < 10; i++ ){
			    $("#results").append(createItem(data[1][i], data[2][i], data[3][i]));
			}
	        }
	    } );
	}//end if
    });//end keypress

function createItem(x,y,z){
    var title = "<h1>"+x+"</h1>";
	var desc = y;    
	var body = '<div class="si"><span class="hoover"></span>'+title+desc+'</div>';
    return '<a href="'+z+'"">'+body+'</a>';
}
