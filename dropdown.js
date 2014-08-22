$('document').ready(function(){
  $("#selection").on("click", ".topdropdown", function(){
      $(".dropdownmenu").slideToggle();
  });
$("#selection").on("click", ".dropoption1", function(){
    $(".dropdownmenu").slideUp();
        var message=$('.dropoption1 span').text();
        $(".display").fadeOut();
        $('#dropoption1').delay(500).fadeIn();
        $(".topdropdown span").replaceWith("<span>" + message + "</span>");
    });
$("#selection").on("click", ".dropoption2", function(){
    $(".dropdownmenu").slideUp();
        var message=$('.dropoption2 span').text();
        $(".display").fadeOut();  
        $("#dropoption2").delay(500).fadeIn();
        $(".topdropdown span").replaceWith("<span>" + message + "</span>");
    });
$("#selection").on("click", ".dropoption3", function(){
    $(".dropdownmenu").slideUp();
        var message=$('.dropoption3 span').text();
        $(".display").fadeOut();  
        $("#dropoption3").delay(500).fadeIn();
        $(".topdropdown span").replaceWith("<span>" + message + "</span>");
    });
$("#selection").on("click", ".dropoption4", function(){
    $(".dropdownmenu").slideUp();
        var message=$('.dropoption4 span').text();
        $(".display").fadeOut();  
        $("#dropoption3").delay(500).fadeIn();
        $(".topdropdown span").replaceWith("<span>" + message + "</span>");
    });
});