

		/*
jq(".colorswatch").click(function() {

           var x = Math.floor(Math.random() * 256); // range is 0-255
    		var y = Math.floor(Math.random() * 256);
    		var z = Math.floor(Math.random() * 256);
    		var thergb = "rgb(" + x + "," + y + "," + z + ")"; 

			jq(this).css("background-color",thergb);		});
*/
var jq = jQuery.noConflict();
	jq(document).ready(function(){
 /*
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }*/
function pickColor() {


           var x = Math.floor(Math.random() * 256); // range is 0-255
    		var y = Math.floor(Math.random() * 256);
    		var z = Math.floor(Math.random() * 256);
    		var colors = new Array(x, y, z);
    		return colors;
}
/*
function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#colorswatch" ).css( "background-color", "#" + hex );
    }

$( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      min: 0,
      max: 255,
      value: 127,
     slide: refreshSwatch(),
      change: refreshSwatch()
    });
    var x = pickColor();
    $( "#red" ).slider( "value", x[0] );
    $( "#green" ).slider( "value",x[1] );
    $( "#blue" ).slider( "value", x[2]);
*/


$( function() {
    $( "#red" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 255,
      value: 60,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#red" ).slider( "value" ) );
  } );
});




