
$(window).on('load', function(){
	
	var dryers = JSON.parse(localStorage.getItem("dryers"))
	var dryer_type = localStorage.lbl;
	var container = $("#start_over");
	var html =[];
	
	$.each(dryers, function(index,value){
		
		console.log(index + "," + value);
		html.push('<div class="row"><div class="col-xl-12 col-xs-12 text-center"><h1 >Recommended Dryer</h1></div></div><div class="row"><div class="col-xl-12 col-xs-12 text-center"><img id="img_dryer' + index + '" ></div></div><div class="row"><div class="col-xl-12 col-xs-12 text-center"><h1 id="rec_dryer' + index + '"></h1></div></div><div class="row top-buffer justify-content-md-center"><div class="col-xl-4 col-xs-12 text-center"><a class="brochure" href = "#" id="brochure' + index + '"><i class="fas fa-book" data-toggle="tooltip" title="Brochure"></i></a></div></div>');
		

		
	});
	
	container.before(html.join(""));
	
	$.each(dryers, function(index,value){
		source = "photos/" + value + ".png";
		$("#rec_dryer" + index).text(value);
		$("#img_dryer" + index).attr("src",source);
		if(dryer_type == "Non-cycling"){
			
			$("#brochure"+index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=426585&ft=1");
		}
			
		else if(dryer_type == "Cycling"){

			$("#brochure"+index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=426585&ft=1");
			
			
		}
		else if(dryer_type == "High Temperature"){
			
			$("#brochure" + index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=426585&ft=1");
			

		}
		else if(dryer_type == "Heatless Purge"){
			
			$("#brochure" + index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&dataid=61697");
			

		}
		else if(dryer_type == "Heated Purge"){
			
			$("#brochure" + index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&dataid=61697");
			

		}
		else if(dryer_type == "Blower Purge"){
			
			$("#brochure" + index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&dataid=61697");
			

		}
		else if(dryer_type == "Modular"){
			
			$("#brochure" + index).attr("href","http://www.revbase.com/tt/sl.ashx?z=12b3cd59&DataID=2768474&ft=1");
			

		}
		
	});
	
});