// function for left side
$(document).ready(function(){
  $("#latest-news").click(function(){
    $("#most-pop").removeClass("active");
	$("#latest-news").addClass("active");
  });
});

$(document).ready(function(){
  $("#most-pop").click(function(){
    $("#latest-news").removeClass("active");
	$("#most-pop").addClass("active");
  });
});

$(document).ready(function(){
  $("#latest-news").click(function(){
	$(".most-pop-content").hide();							   
    $(".latest-news").show();
  });
});

$(document).ready(function(){
  $("#most-pop").click(function(){
	$(".latest-news").hide();							   
    $(".most-pop-content").show();
  });
});
//function for more news button
$(document).ready(function(){
  $(".more-news-button").click(function(){							   
    $(".more-news").fadeIn(1000);
	$(".more-news-button").hide();
  });
});
