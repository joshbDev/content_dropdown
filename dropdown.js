$('document').ready(function(){
  $("#selection").on("click", ".topdropdown", function(){
      $(".dropdownmenu").slideToggle();
  });
    $("#selection").on("click", ".drop1", function(){
    $(".dropdownmenu").slideUp();
        var message=$('.drop1 span').text();
        $(".display").fadeOut();
        $('#drop1').delay(500).fadeIn();
        $(".topdropdown span").replaceWith("<span>" + message + "</span>");
    });
        $("#selection").on("click", ".drop2", function(){
    $(".dropdownmenu").slideUp();
            var message=$('.drop2 span').text();
                  $(".display").fadeOut();  
        $("#drop2").delay(500).fadeIn();
             $(".topdropdown span").replaceWith("<span>" + message + "</span>");
    });
    $("#selection").on("click", ".drop3", function(){
    $(".dropdownmenu").slideUp();
        var message=$('.drop3 span').text();
                  $(".display").fadeOut();  
        $("#drop3").delay(500).fadeIn();
          $(".topdropdown span").replaceWith("<span>" + message + "</span>");
    });
    $("#selection").on("click", ".drop4", function(){
    $(".dropdownmenu").slideUp();
        var message=$('.drop4 span').text();
                  $(".display").fadeOut();  
        $("#drop3").delay(500).fadeIn();
          $(".topdropdown span").replaceWith("<span>" + message + "</span>");
    });
});

