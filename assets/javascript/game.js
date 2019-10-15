$(document).ready(function () {

    var charContainer = $("#charContainer");
    //console.log("charContainer is: " + charContainer);
    var enemyContainer = $("#enemyContainer");

    var fightContainer = $("#fightContainer");

    var playerChosen = false;

    var targetChosen = false;

    var player;

    var playerObj;

    var target;

    var targetObj;

    var killCount = 0;

    //choose player character
    $(".player").on("click", function () {
        if (!playerChosen) {
            player = $(this).attr("id");
            var clone = $(this).clone();
            $(this).remove();
            clone.appendTo(charContainer);


            $("div").each(function (index, element) {
                if ($(element).hasClass("player") && $(element).attr("id") !== player) {
                    $(element).removeClass("player");
                    $(element).addClass("enemy");
                    $(element).css("border-color", "red");
                    var clone = $(element).clone();
                    $(element).remove();
                    clone.appendTo(enemyContainer);
                }
            });
            playerChosen = true;
            playerObj = grabAttrs(player);
            console.log(playerObj);
        }
    });

    //select target
    $(document).on("click", ".enemy", function () {
        if (playerChosen && !targetChosen) {
            target = $(this).attr("id");
            $(this).addClass("target");
            var clone = $(this).clone();
            $(this).remove();
            clone.appendTo(fightContainer);

            targetChosen = true;
            targetObj = grabAttrs(target);
            console.log(targetObj);
        }
    });

    $("#attackButton").on("click", function() {
        event.preventDefault();
        if(targetChosen) {
            targetObj.hp = targetObj.hp - playerObj.curATK;
            $("#" + target + "hp").html(targetObj.hp);
            playerObj.hp = playerObj.hp - targetObj.counter;
            $("#" + player + "hp").html(playerObj.hp);

            lossCheck();

            playerObj.atkUP();

            if(targetObj.hp <= 0) {
                fightContainer.empty();
                targetChosen = false;
                victoryCheck();
            }

        }
    })



    /* #region  character objects */
    var characters = [
        {
            hp: 120,
            baseATK: 8,
            curATK: 8,
            counter: 8,
            name: "obiwan",

            atkUP: function () {
                this.curATK += this.baseATK;
            }
        },

        {
            hp: 95,
            baseATK: 14,
            curATK: 14,
            counter: 11,
            name: "leia",

            atkUP: function () {
                this.curATK += this.baseATK;
            }
        },

        {
            hp: 180,
            baseATK: 6,
            curATK: 6,
            counter: 9,
            name: "vader",

            atkUP: function () {
                this.curATK += this.baseATK;
            }
        },

        {
            hp: 150,
            baseATK: 10,
            curATK: 10,
            counter: 10,
            name: "maul",

            atkUP: function () {
                this.curATK += this.baseATK;
            }
        }
    ]
    /* #endregion */

    function grabAttrs(charName) {
        for(var i=0; i < characters.length; i++) {
            console.log(characters[i]);
            console.log(charName);
            if(characters[i].name === charName) {
                console.log("its equal")
                return characters[i];
            }
        }
    }

    function victoryCheck(){
        if(enemyContainer.children().length <= 0 && fightContainer.children().length <= 0) {
            enemyContainer.html("<h1 class='deadText'>You Win!</h1>");
        }
    }

    function lossCheck(){
        if(parseInt($("#" + player + "hp").text()) <= 0) {
            enemyContainer.append("<h1 class='deadText'>You Dead!</h1>");
        }
    }

});