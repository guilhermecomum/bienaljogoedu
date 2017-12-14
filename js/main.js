$( document ).ready(function() {
  var parts = ["d", "a", "b", "c"];
  var heads = ["hb", "hc", "hd", "ha"];
  var necks = ["nc", "nd", "nb", "na"];

  $(".head").each(function(){
    $(this).addClass(heads[~~(Math.random()*heads.length)]);
  });
  $(".eyes").each(function(){
    $(this).addClass(parts[~~(Math.random()*parts.length)]);
  });
  $(".nose").each(function(){
    $(this).addClass(parts[~~(Math.random()*parts.length)]);
  });
  $(".mouth").each(function(){
    $(this).addClass(parts[~~(Math.random()*parts.length)]);
  });
  $(".neck").each(function(){
    $(this).addClass(necks[~~(Math.random()*necks.length)]);
  });



    $("#container li").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });

    $(".person").hover(function() {
      console.log("entrei", $(this).children(".mouth"))
      $(this).children(".mouth").addClass("phrase");
    }, function() {
      console.log("sai", $(this).children(".mouth"))
      $(this).children(".mouth").removeClass("phrase");
    });
  }
);

