// Teddy Clark clarke4

var jq = jQuery.noConflict();
jq(document).ready(function(){
  /*
   * When the button's onclick event is fired,
   * hides all p elements.
   *
   */
  jq("button#lab3b").click(function(){
    jq("p.hidden3").show();
    jq("p.show3").hide();
    jq("p.hidden4").hide();
    jq("p.hidden5").hide();
    jq("p.show4").show();
    jq("p.show5").show();
  });

  jq("button#lab4b").click(function(){
    jq("p.hidden4").show();
    jq("p.show4").hide();
    jq("p.hidden3").hide();
    jq("p.hidden5").hide();
    jq("p.show3").show();
    jq("p.show5").show();
  });

  jq("button#lab5b").click(function(){
    jq("p.hidden5").show();
    jq("p.show5").hide();
    jq("p.hidden3").hide();
    jq("p.hidden4").hide();
    jq("p.show3").show();
    jq("p.show4").show();
  });

  jq("button#id=anlab3").click(function(){
    alert("lab3 content");
  });
  jq("button#id=anlab4").click(function(){
    jq("p.hidden5").alert(document.getElementsByClassName("hidden4"));
  });
  jq("button#id=anlab5").click(function(){
    jq("p.hidden5").alert("p.hidden5");
  });

});
