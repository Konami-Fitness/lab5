var jq = jQuery.noConflict();
jq(document).ready(function(){
    
var setting = {
    name: "guest",
    total_rounds: 3
  };

    var colorObj = {
    red: 0,
    green: 0,
    blue: 0
  };

  var game = {
    time:"00:00:00",
    round:1,
    total_rounds: 1,
    milliseconds: 0,
    prev_milliseconds: 0

//include timer and round tracker

  };

  document.getElementById("settingsform").addEventListener("submit", function(e) {
    e.preventDefault();
    //alert("3" + setting.rounds + "34");
    if(document.getElementById("fname").value ==="guest") {
      setting.name = "guest";
    } else {
       setting.name = document.getElementById("fname").value;

    }
     if(document.getElementById("rounds").value === "guest") {
      setting.total_rounds = 3;
    } else {
    game.total_rounds = document.getElementById("rounds").value;
    setting.total_rounds = document.getElementById("rounds").value;

    }

jq('.initial').hexed(setting,game,colorObj);

  });  




(function( $ ) {
 
    $.fn.hexed = function( setting, game, colorObj ) {
      alert(game.total_rounds);
          
    jq('.settings').hide();

function toMillisec(h,m,s) {
  return s*1000 + m*60*1000 + h*60*60*1000;
}

function getScore(red,green,blue,milliseconds) {
  return ((300 - (red + green + blue)) * ((20000 - milliseconds) < 0 ? 0 : (20000 - milliseconds)));

}
        


    function get_elapsed_time_string(total_seconds) {
  function pretty_time_string(num) {
    return ( num < 10 ? "0" : "" ) + num;
  }

  var hours = Math.floor(total_seconds / 3600);
  total_seconds = total_seconds % 3600;

  var minutes = Math.floor(total_seconds / 60);
  total_seconds = total_seconds % 60;

  var seconds = Math.floor(total_seconds);

  game.milliseconds = toMillisec(hours, minutes, seconds);

  // Pad the minutes and seconds with leading zeros, if required
  hours = pretty_time_string(hours);
  minutes = pretty_time_string(minutes);
  seconds = pretty_time_string(seconds);

  // Compose the string for display
  var currentTimeString = hours + ":" + minutes + ":" + seconds;
  game.time = currentTimeString;
  return currentTimeString;
}

var elapsed_seconds = 0;
var timer = setInterval(function() {
  elapsed_seconds = elapsed_seconds + 1;
  $('#box_header').text(get_elapsed_time_string(elapsed_seconds));
}, 1000);

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
    //this line below will reveal value of randomly generated color
 //  jq("#r1").html(thergb);
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
    

function percentOff(guess, correct) {

  return Math.round((((Math.abs(correct - guess) / 255) * 100) + Number.EPSILON) * 100) / 100;
}


function stopTime() {
  clearInterval(timer);
}

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
       stopTime();

        jq('.score').html("Score" + getScore(0,0,0, game.milliseconds - game.prev_milliseconds));

     /*
      jq('.colorswatch').hide();
      jq('#colors').hide();
      jq('h1').hide();
     */
    jq('.settings').show();

      alert("you won!");

    } else if (game.total_rounds == game.round){
      //stopTime();
             jq('.settings').show();
             alert("game over! youve reached your limit for rounds.");

   var percentOffRed = percentOff(x, colorObj.red);

      var percentOffGreen = percentOff(y, colorObj.green);
      var percentOffBlue = percentOff(z, colorObj.blue);
if(jq('.score').html() < getScore(percentOffRed,percentOffGreen,percentOffBlue, game.milliseconds - game.prev_milliseconds) ) {
        jq('.score').html("Score: " + getScore(percentOffRed,percentOffGreen,percentOffBlue, game.milliseconds - game.prev_milliseconds));
      }
      jq('.stats').html("Red: " + percentOffRed + "% off" + "<br>" + 
                       "Green: " + percentOffGreen + "% off" + "<br>"  +
                       "Blue: " + percentOffBlue + "% off");


    }



     else {
      
    

alert("Entering round" + game.round + ". Try again!");
      var percentOffRed = percentOff(x, colorObj.red);

      var percentOffGreen = percentOff(y, colorObj.green);
      var percentOffBlue = percentOff(z, colorObj.blue);
      if(jq('.score').html() < getScore(percentOffRed,percentOffGreen,percentOffBlue, game.milliseconds - game.prev_milliseconds) ) {
        jq('.score').html("Score: " + getScore(percentOffRed,percentOffGreen,percentOffBlue, game.milliseconds - game.prev_milliseconds));
      }
      jq('.stats').html("Red: " + percentOffRed + "% off" + "<br>" + 
                       "Green: " + percentOffGreen + "% off" + "<br>"  +
                       "Blue: " + percentOffBlue + "% off");
        game.prev_milliseconds = game.milliseconds;
    
            game.round++;
    }
    //jq(".colorswatch").css("background-color",rgb);

    return false;
  });

 
    };
 
}( jQuery ));

    
  



});



