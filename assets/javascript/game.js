$(document).ready(function(){

    var charContainer = $("#charContainer");
    //console.log("charContainer is: " + charContainer);
    var enemyContainer = $("#enemyContainer");

    var fightContainer = $("#fightContainer");

    var playerChosen = false;

    var targetChosen = false;

    var player;

    var target;

    var killCount = 0;
    
    //choose player character
    $(".player").on("click", function(){
        if(!playerChosen)
        {
            player = $(this).attr("id");            
            var clone = $(this).clone();        
            $(this).remove();
            clone.appendTo(charContainer);
        

            $("div").each(function(index, element){
                if($(element).hasClass("player") && $(element).attr("id")!==player)
                {
                    $(element).removeClass("player");
                    $(element).addClass("enemy");
                    $(element).css("border-color","red");
                    var clone = $(element).clone();
                    $(element).remove();
                    clone.appendTo(enemyContainer);
                }            
            });
            playerChosen = true;
        }        
    });

    //select target
    $(document).on("click", ".enemy", function(){
        if(playerChosen && !targetChosen)
        {
            target = $(this).attr("id");
            $(this).addClass("target");
            var clone = $(this).clone();
            $(this).remove();
            clone.appendTo(fightContainer);

            targetChosen = true;
        }
    });


//TODO create objects for each character
});