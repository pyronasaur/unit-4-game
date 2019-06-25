$(document).ready(function(){

    var charContainer = $("#charContainer");
    //console.log("charContainer is: " + charContainer);
    var enemyContainer = $("#enemyContainer");

    var fightContainer = $("#fightContainer");

    var playerChosen = false;

    var player;

    var enemy;
    
    //choose player character
    $(".player").on("click", function(){
        player = $(this).attr("id");
        $(this).removeClass("enemy");
        $(this).removeClass("player");
        var clone = $(this).clone();        
        $(this).remove();
        clone.appendTo(charContainer);

        $("div").each(function(index, element){
            if($(element).hasClass("player"))
            {
                $(element).removeClass("player");
                var clone = $(element).clone();
                $(element).remove();
                clone.appendTo(enemyContainer);
            }            
        });

        playerChosen = true;
    });

    

});