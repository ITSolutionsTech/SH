$(function(){
	//Automatiser le scroll de la webpart
		if($(".ms-webpart-zone") && $(".ms-webpart-zone").width() > 1000){
		
		$("#contentBox").css("overflow-x" , "scroll");
		
	}
	
	//POUR LA REDIRECTION DE LA CREATION D'UN SONDAGE

		if(window.location.href.indexOf("sondages/_layouts/15/qstnew.aspx") > -1 ){
		
				$("#onetidSaveItem").click(function(){
				
				window.location.href = "/did/Lists/Sondages/AllItems.aspx";
				
				});
		
		}


jQuery("#pageTitle").ready(function(jQuery){
if(jQuery("#pageTitle > span").text().length > 45){
    
    jQuery("#pageTitle > span").clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text().substring(0,80);
}
});
});





