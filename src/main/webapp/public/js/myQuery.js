/*
 * JavaScript Scenarious 
 * @name myQuery.js
 * @author Oxana Beydilli
 * @version 0.1
 * @date May 18, 2013
 * @category JavaScript,jQuery library
 * @copyright (c) 2013 Oxana Beydilli
 * @license 
 * @example Visit http://
 * */
//селекты с выбором цвета
 function writeColorOptions (){
	document.write('<option style="background-color:white;" value="white">&nbsp;&nbsp;</option>'+
			 '<option style="background-color:light-grey;" value="none">безцв.</option>'+
             '<option style="background-color:purple;" value="purple">&nbsp;&nbsp;</option>'+
             '<option style="background-color:blue;" value="blue">&nbsp;&nbsp;</option>'+ 
             '<option style="background-color:deepskyblue;" value="deepskyblue">&nbsp;&nbsp;</option>'+
             '<option style="background-color:green;" value="green">&nbsp;&nbsp;</option>'+
             '<option style="background-color:yellow;" value="yellow">&nbsp;&nbsp;</option>'+
             '<option style="background-color:pink;" value="pink">&nbsp;&nbsp;</option>'+
             '<option style="background-color:orange;" value="orange">&nbsp;&nbsp;</option>'+
             '<option style="background-color:red;" value="red">&nbsp;&nbsp;</option>'+
             '<option style="background-color:brown;" value="brown">&nbsp;&nbsp;</option>'+
             '<option style="background-color:black;" value="black">&nbsp;&nbsp;</option>'
	);
};
//селекты с выбором размера шрифта
 function writeFontSize () {
 	for (var i=14;i<36;i++) {
 	document.write('<option value='+i+'>'+i+'</option>');
 	}
 }
//селекты с выбором шрифта
 function writeFontFamily () {
 	document.write('<option style="font-family: Arial;" value="Arial">Arial</option>'+
			 '<option style="font-family: Arial Black;" value="Arial Black">Arial Black</option>'+
             '<option style="font-family:Comic Sans MS;" value="Comic Sans MS">Comic Sans MS;</option>'+
             '<option style="font-family:Courier New;" value="Courier New">Courier New</option>'+ 
             '<option style="font-family:Georgia;" value="Georgia">Georgia</option>'+
             '<option style="font-family:Impact;" value="Impact">Impact</option>'+
             '<option style="font-family:Lucida Console;" value="Lucida Console">Lucida Console</option>'+
             '<option style="font-family:Symbol;" value="Symbol">Symbol</option>'+
             '<option style="font-family:Times New Roman;" value="Times New Roman">Times New Roman</option>'+
             '<option style="font-family:Trebuchet MS;" value="Trebuchet MS">Trebuchet MS</option>'+
             '<option style="font-family:Verdana;" value="Verdana">Verdana</option>'
	);
 	
 }
//вывод подсказки
$(document).ready(function () {
$(function() {
    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" ).addClass( "arrow" )
                                 .addClass( feedback.vertical )
                                 .addClass( feedback.horizontal )
                                 .appendTo( this );
        }}
    });
  });
  
$(document).ready(function(){
//Делаем неактивнымии элементы формы
	var formInactive = function (x){
	$("div.subChoice .colors").prop("disabled",x);
	$("#gradButton").prop("disabled",x);
	$("input[name='direction']").prop("disabled",x);
};
formInactive(true);
//jQuery("#singleColor").colorPicker(); 
$('input[name="fillType"]').on("change",function(){
  $("#rectGrad").attr("width",jQuery("#page1").width());
  $("#rectGrad").attr("height",jQuery("#page1").height());
//если выбрано "залить одним цветом"
  if ($("#sc").prop("checked")){
    formInactive(true);
    $(".colorPicker-picker").remove();
	$("#singleColor").colorPicker(); 
  }
//если выбрано "залить градиентом"
  else if ($("#gc").prop("checked")){
	formInactive(false);
	$(".colorPicker-picker").remove();

  }
});
 

});
//добавление и удаление полей с текстом
$("#addInput").on("click",function (){
var textInputs = $("[name=textAddForm]").children("input[type=text]");
var lastId = $("[name=textAddForm]").children("input[type=text]").eq(textInputs.length-1).attr("id");
var newInput = $("#"+lastId).clone();
$(newInput).attr("id","textToAdd"+textInputs.length);
$(newInput).insertBefore(".textTools");
$("<br>").insertBefore(".textTools");

alert(lastId);
})
});
//добавление изображения в мини-редактор
function loadToEditor(){
$("#user_img").submit();
return false;

}
















