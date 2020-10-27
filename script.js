var jq = jQuery.noConflict();
	jq(document).ready(function(){

  var color = {
  	red: 0,
  	green: 0,
  	blue: 0
  };

  function setColor() {
    color.red = Math.floor(Math.random() * 256); // range is 0-255, random doesnt include 1
		color.green = Math.floor(Math.random() * 256);
		color.blue = Math.floor(Math.random() * 256);
		var thergb = "rgb(" + color.red + "," + color.green + "," + color.blue + ")";
		jq(".colorswatch").css("background-color",thergb);
		jq("#r1").html(thergb);
	}
  setColor();

  jq("#tred, #tgreen, #tblue").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 255,
    value: 127,
    slide: function( event, ui ) {
      $( "#tred" ).val( ui.value );
    }
  });
  jq("#tred").slider("value", color.red);
  jq("#tgreen").slider("value", color.green);
  jq("#tblue").slider("value", color.blue);
/*

	 function printColor() {
	 	var arr = setColor();

	   jq(".colorswatch").after("red: " + arr[0] + " green: " + arr[1] + " blue: " + arr[2]);


	 }

			setColor();
			printColor();*/
/*


jq('#red').on('input', function() {
	var input=jq(this);
	var color=input.val();
	colorObj.red = color;

});
jq('#green').on('input', function() {
	var input=jq(this);
	var color=input.val();
	colorObj.green = color;

});
jq('#blue').on('input', function() {
	var input=jq(this);
	var color=input.val();
	colorObj.blue = color;

});








var rgb = "rgb(" + values[0] + "," + values[1] + "," + values[2] + ")";

jq(".colorswatch").css("background-color",rgb);

*/

  document.getElementById("colors").addEventListener("submit", function(e) {
    e.preventDefault();

    // your code here
    var rguess = document.getElementById('red').value;
    var gguess = document.getElementById('green').value;
    var bguess = document.getElementById('blue').value;

    // Calculation
    var rgb = "rgb(" + rguess + "," + gguess + "," + bguess + ")";
    // Show Result
    if(rguess == color.red && gguess == color.green && bguess == color.blue) {
    	jq('html').css('background-color','black');
    	jq('p#congrats').html("Congrats!").css({"color":"gold", "font-size":"100px", "text-align":"center"});
    	jq('.colorswatch').hide();
    	jq('#colors').hide();
    	jq('h1').hide();
    	alert("you won!");
    } else {
    	alert("try again!");
    }
    //jq(".colorswatch").css("background-color",rgb);

    return false;
  });

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

    /*
function pickColor() {


           var x = Math.floor(Math.random() * 256); // range is 0-255
    		var y = Math.floor(Math.random() * 256);
    		var z = Math.floor(Math.random() * 256);
    		var colors = new Array(x, y, z);
    		return colors;
}*/
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

/*
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
  } );*/
});
