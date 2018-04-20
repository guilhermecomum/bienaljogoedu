$( document ).ready(function() {
  var parts = ["d", "a", "b", "c"];
  var heads = ["hb", "hc", "hd", "ha"];
  var necks = ["nc", "nd", "nb", "na"];

  $(".head").each(function(){
    var randomNumber = Math.floor(Math.random() * 6);
    $(this).css('background-image', `url(images/head/${randomNumber}.png)`)
  });
  $(".eyes").each(function(){
    var randomNumber = Math.floor(Math.random() * 6);
    $(this).css('background-image', `url(images/eyes/${randomNumber}.png)`)
  });
  $(".mouth").each(function(){
    var randomNumber = Math.floor(Math.random() * 6);
    $(this).css('background-image', `url(images/mouth/${randomNumber}.png)`)
  });


    $("#container li").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });

    $(".person").hover(function() {
      $(this).children(".mouth").addClass("phrase");
    }, function() {
      $(this).children(".mouth").removeClass("phrase");
    });
  }
);
