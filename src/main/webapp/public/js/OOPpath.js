/*
* Реализация Path с помощью OOP
*/
function Pen (x,y) {
	this.path = "path"; 
	this.pathData = "pathData";
	this.mouseIsDown = "mouseIsDown";
	
}
Pen.prototype.drawPen = function() {
	mouseIsDown = true;
	path = document.createElementNS("http://www.w3.org/2000/svg","path");
	pathData = pathData;"M " + x + " " + y + " L ";
	
	path.setAttribute("id","path");
	path.setAttribute("d",pathData);
	path.setAttribute("stroke","black");
	path.setAttribute("fill","none");
	//path.setAttribute("z-order","1");
	document.getElementById("page1").appendChild(path);
}
Pen.prototype.movePen = function (x,y) {
	if (mouseIsDown === true){
		pathData += " " + x + " " + y;
		document.getElementById("path").setAttribute("d", pathData);
		}
}
Pen.prototype.mouseUp = function(){
	
	mouseIsDown = false;
	
}

/*
 *  <script type="text/javascript">
				  $('input[name="draw"]').on("change",function(){
			    		
			    	   if ($("#pen").prop("checked")){
			    		   $("#page1").on("mousedown",function (e){
			    			  drawPen(
			    					  e.pageX-$("#page1").offset().left,
			    					  e.pageY-$("#page1").offset().top
			    					 )});
			    			  $("#page1").on("mousemove",function (e){
				    			  movePen(
				    					  e.pageX-$("#page1").offset().left,
				    					  e.pageY-$("#page1").offset().top
				    					  )});	
			    			  
			    			  $("#page1").on("mouseup",function (e){
			    			  mouseUp();
			    			  
			    			  })
			    			  
				    		       		   
			    	   }
			    	
			    	   
				  });  
			    		$("#deleteEl").click(function (){
			    			$("#path").remove();  
			    			
			    		});
				  
				  
				   </script>
*/
/*if ($("#pen").prop("checked")){
var a = new Pen();
$("#page1").on("mousedown",function (e){
	 
	   a.drawPen(
			  e.pageX-$("#page1").offset().left,
			  e.pageY-$("#page1").offset().top
			  )
});

	  $("#page1").on("mousemove",function (e){
		 a.movePen(
				  e.pageX-$("#page1").offset().left,
				  e.pageY-$("#page1").offset().top
				  )});	
	  
	  $("#page1").on("mouseup",function (e){
	  a.mouseUp();
	  
	  })
	  
	       		   
}


});  
$("#deleteEl").click(function (){
	$("#path").remove();  
	
});

*/
/*
* Реализация Path с помощью OOP

function Pen (x,y,pathData) {
	this.path = "path"; 
	this.pathData = x+" "+y;
	this.mouseIsDown = "mouseIsDown";
	this.id = "path";
	
}
Pen.prototype.drawPen = function(x,y) {
	mouseIsDown = true;
	path = document.createElementNS("http://www.w3.org/2000/svg","path");
	pathData = "M " + x + " " + y + " L ";
	
	path.setAttribute("id","path");
	path.setAttribute("d",pathData);
	path.setAttribute("stroke","black");
	path.setAttribute("fill","none");
	//path.setAttribute("z-order","1");
	
	var node = document.getElementById("mydefs");
	node.appendChild(path);
}
Pen.prototype.movePen = function (x,y) {
	//if (mouseIsDown === true){
		this.pathData += " " + x + " " + y;
		this.setAttribute("d", pathData);
		//}
}
Pen.prototype.mouseUp = function(){
	
	mouseIsDown = false;
	
}*/
function newMove(){
    $("#page1").unbind("mousedown");
    $("#page1").unbind("mousemove");	
}
//сценарии для рисования на холсте
$('input[name="draw"]').on("change",function(){
  $("#page1").on("mouseover",function(){this.style.cursor = "crosshair";}); 
  //рисование пером
    if ($("#pen").prop("checked")){
      newMove();
	  $("#page1").bind("mousedown",function (e){
		var shape_temp = event.target.id;
		mouseIsDown = "true";
		var offset = $(this).offset();
		var x = (e.pageX - offset.left);
		var y = (e.pageY - offset.top);	    			   	    	    			  			   
		shape_temp.setPath(
				$("#pathColor option:selected").val(),
				$("#spinner").val()
				);
	  });
	  $("#page1").bind("mousemove",function (e){
	    // e = e||window.event;
		if (mouseIsDown === "true"){
		  var offset = $(this).offset();
		  var x = (e.pageX - offset.left);
		  var y = (e.pageY - offset.top);
		  extendPath(x,y);
	    } else return;
	  });	
	  $("#page1").on("mouseup",function (e){
	    //e = e||window.event;
		mouseUp();
	  });
	}	
//удление элемента при клике на кнопку

//рисование линии
  if ($("#line").prop("checked")) {
    newMove();
    $("#page1").bind("mousedown",function (e){
      mouseIsDown = "true";
      var offset = $(this).offset();
	  var x = (e.pageX - offset.left);
	  var y = (e.pageY - offset.top);	    			   	    	    			  			   
	  drawLine(
			x , y,
			$("#pathColor option:selected").val(),
			$("#spinner").val()
			);
    });
    $("#page1").bind("mousemove",function (e){
  // e = e||window.event;
      if (mouseIsDown === "true"){
	    var offset = $(this).offset();
	    var x = (e.pageX - offset.left);
 	    var y = (e.pageY - offset.top);
 	    extendLine(x,y);
	  }else return;
    });	
    $("#page1").on("mouseup",function (e){
      mouseUp();
    });
  }
});	
  $("#deleteEl").click(function (){
    $("#path").remove();  
  });