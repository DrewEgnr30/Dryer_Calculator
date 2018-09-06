function setStorage(dry_type){
	
	
	if(dry_type == "nc"){
		
		localStorage.lbl = document.getElementById("nc_btn").value;
		
	}
	else if(dry_type == "cyc"){
		
		localStorage.lbl = document.getElementById("cyc_btn").value;
		
	}
	else{
		
		localStorage.lbl = document.getElementById("ht_btn").value;
		
	}
	

}



