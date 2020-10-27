var jq = jQuery.noConflict();
jq(document).ready(function(){
/*
		jq(".colorswatch").click(function() {

           var x = Math.floor(Math.random() * 256); // range is 0-255
    		var y = Math.floor(Math.random() * 256);
    		var z = Math.floor(Math.random() * 256);
    		var thergb = "rgb(" + x + "," + y + "," + z + ")";

			jq(this).css("background-color",thergb);		});*/

  var colorObj = {
  	red: 0,
  	green: 0,
  	blue: 0
  };
        

  function setColor() {
    var x = Math.floor(Math.random() * 256); // range is 0-255
		var y = Math.floor(Math.random() * 256);
		var z = Math.floor(Math.random() * 256);
		var thergb = "rgb(" + x + "," + y + "," + z + ")";

    var colors = new Array(x, y, z);
		jq(".colorswatch").css("background-color",thergb);
		colorObj.red = colors[0];
		colorObj.green = colors[1];
		colorObj.blue = colors[2];
    
		jq("#r1").html(thergb);
	}

  setColor();
  jq("#red-slide, #green-slide, #blue-slide").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 255,
    value: 0
  });

  
  jq('#red').on('input', function() {
    let input=jq(this);
    jq('#red-slide').slider('value', input.val())
  });
  jq('#green').on('input', function() {
    let input=jq(this);
    jq('#green-slide').slider('value', input.val());
  });
  jq('#blue').on('input', function() {
    let input=jq(this);
    jq('#blue-slide').slider('value', input.val());
  });
  jq('#red-slide').slider({
    change: function(event, ui) { 
       jq("#red").val(ui.value)
    } 
  })
  jq('#green-slide').slider({
    change: function(event, ui) { 
       jq("#green").val(ui.value)
    } 
  })
  jq('#blue-slide').slider({
    change: function(event, ui) { 
       jq("#blue").val(ui.value)
    } 
  })
    

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

  document.getElementById('colors').addEventListener('submit', function(e) {
    e.preventDefault();

    // your code here
    var x = document.getElementById('red').value;
    var y = document.getElementById('green').value;
    var z = document.getElementById('blue').value;

    // Calculation
    var rgb = "rgb(" + x + "," + y + "," + z + ")";
    // Show Result
    if(x == colorObj.red && y == colorObj.green && z == colorObj.blue) {
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

// $( "#red, #green, #blue" ).slider({
//       orientation: "horizontal",
//       range: "min",
//       min: 0,
//       max: 255,
//       value: 127,
//      slide: refreshSwatch(),
//       change: refreshSwatch()
//     });
//     var x = pickColor();
//     $( "#red" ).slider( "value", x[0] );
//     $( "#green" ).slider( "value",x[1] );
//     $( "#blue" ).slider( "value", x[2]);
// */

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
