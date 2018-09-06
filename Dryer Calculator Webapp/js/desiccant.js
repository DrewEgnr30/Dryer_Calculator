
function setStorage(dry_type){
	
	
	if(dry_type == "hl"){
		
		localStorage.lbl = document.getElementById("hl_btn").value;
		
	}
	else if(dry_type == "hp"){
		
		localStorage.lbl = document.getElementById("hp_btn").value;	
		
	}
	else if(dry_type == "bp"){
		
		localStorage.lbl = document.getElementById("bp_btn").value;	
		
	}
	else{
		
		localStorage.lbl = document.getElementById("md_btn").value;
		
	}
	
}






