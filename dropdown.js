$(document).ready(function(){
  $("#selection").on("click", ".topdropdown", function(){
      $(".menu").slideToggle();
  });
    $("#selection").on("click", ".avvc", function(){
    $(".menu").slideUp();
        var message=$("<span>AV/VC Rooms</span>");
        $(".display").fadeOut();
        $("#avvc").delay(500).fadeIn();
        $(".topdropdown span").replaceWith(message);
    });
        $("#selection").on("click", ".avcom", function(){
    $(".menu").slideUp();
            var message=$("<span>AV Combinable Room</span>");
                  $(".display").fadeOut();  
        $("#avcom").delay(500).fadeIn();
             $(".topdropdown span").replaceWith(message);
    });
    $("#selection").on("click", ".av", function(){
    $(".menu").slideUp();
        var message=$("<span>AV Rooms</span>");
                  $(".display").fadeOut();  
        $("#avroom").delay(500).fadeIn();
          $(".topdropdown span").replaceWith(message);
    });
});
