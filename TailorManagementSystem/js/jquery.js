/*
to make page responsive for width less than 480px, we have to hide the menu!!
this function show menu otherwise hide it through animate.
 */
function showMenu() {
  if($("nav").css("display") == "none"){
    $(".main").fadeTo("fast",0.1);
    $(".main").css("position","fixed");
    $("nav").animate({width: "toggle"},{
      duration: 1000
    });
  }
  else{
    hideMenu();
  }
}

/*
to make page responsive for width less than 480px, this function
hide navigation menu by making display 'none' for navigation section
through animate
 */
function hideMenu(){
  if($("nav").css("display") == "block")
  {
    $(".main").fadeTo("fast",1);
    $(".main").css("position","absolute");
    $("nav").animate({width: 'toggle'}, {
      duration: 1000,
      complete: function () {
        $("nav").removeAttr("style");
      }
    });
  }
}

// logout to login form: used at Logout button
function myFunction() {
  location.replace("index.html");
}

$(document).ready(function () {
/*
     for width less than 480px; hide menu if user click anywhere on screen
   */
  $(document).click(function(event) {
    if($(window).width() <= 480) {
      hideMenu();
    }
  });

/*
  for width less than 480px; menu icon is shown to show/hide
  navigation menu
 */
  $("#menu").click(function (e) {
    showMenu();
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

/*
  to show a popup for sales section
  we make popUp content visible and make body section's opacity to 0.2
 */
  $("#salesbtn").click(function () {
    var bodyContent = $(".body_content");
    var popContent = $(".popUp_content");
    popContent.css("display","block");
    popContent.css("z-index",1);
    bodyContent.css("opacity",0.2);
    bodyContent.css("z-index",-100);
    bodyContent.css("position","fixed");
    $("#div1").css("z-index",1);
  });

/*
  close the popUp screen and making body to its normal working state
  */
  $("#close_popUp").click(function () {
    $(".popUp_content").css("display","none");
    var bodyContent = $(".body_content");
    bodyContent.css("opacity",1);
    bodyContent.css("z-index",1);
    bodyContent.css("position","absolute");
    $("#div1").css("z-index",0);
  });
});





