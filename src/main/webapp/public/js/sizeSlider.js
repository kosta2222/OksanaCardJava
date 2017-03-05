/**
 * Здесь слайдеры, регулирующие размер и форму холста
 */
$(function() {

	    $( "#slider1" ).slider({
	        range: "max",
	        min: 100,
	        max: 1024,
	        value: 240,
	        slide: function( event, ui ) {
	          $( "#heightV" ).val( ui.value );
	          $("#page1").height(ui.value+"px");
	          $("#rectGrad").attr("height",ui.value+"px");
	        }
	      });
	      $( "#heightV" ).val( $( "#slider1" ).slider( "value" ) );
	    });
$(function() {
    $( "#slider2" ).slider({
        range: "max",
        min: 200,
        max: 1024,
        value: 480,
        slide: function( event, ui ) {
          $( "#widthV" ).val( ui.value );
          $("#page1").width(ui.value+"px");
          $("#rectGrad").attr("width",ui.value+"px");
        }
      });
      $( "#widthV" ).val( $( "#slider2" ).slider( "value" ) );
    });
$(function() {
    $( "#slider3" ).slider({
        range: "max",
        min: 0,
        max: 512,
        value: 0,
        slide: function( event, ui ) {
          $( "#radiusV" ).val( ui.value );
          $("#page1").css("borderRadius",ui.value);
        }
      });
      $( "#radiusV" ).val( $( "#slider3" ).slider( "value" ) );
    });

$(function() {
  $( "#spinner" ).spinner({
    spin: function( event, ui ) {
      if ( ui.value > 25 ) {
        $( this ).spinner( "value", 1 );
        return false;
      } else if ( ui.value < 1 ) {
        $( this ).spinner( "value", 25 );
        return false;
      }
    }
  });
});

