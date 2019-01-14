$(document).ready(function(){


    //fighter class constructor
    function Fighter (fighterName, dmg, def, hp) {
        this.name = fighterName;
        this.dmg = dmg;
        this.def = def;
        this.hp = hp;
    }
    
    /* Character.prototype.increaseAttack = function () {
        this.dmg += dmg;
    }; */


    function initiateGame(){
        var caterpie = new Fighter('Caterpie', 120, 8, 15);
        var rattata = new Fighter('Rattata', 100, 14, 5);
        var gengar = new Fighter('Gengar', 150, 8, 20);
        var dragonite = new Fighter('Dragonite', 180, 7, 20);
        $('#choose').html("<img class='characterToChoose' id='caterpie' src='assets/images/Caterpie.png' alt='Caterpie'>");
        $('#choose').append("<img class='characterToChoose' id='rattata' src='assets/images/Rattata.png' alt='Rattata'>");
        $('#choose').append("<img class='characterToChoose' id='gengar' src='assets/images/Gengar.png' alt='Gengar'>");
        $('#choose').append("<img class='characterToChoose' id='dragonite' src='assets/images/Dragonite.png' alt='Dragonite'>");
    }

    initiateGame();

    var player;
    var currentDmg;
    var enemies = [];
    
    //$('#choose').html($('#fighter1').attr('alt'));

    function displaySection(area){
        $("'#" + area + "'").html("<img class='characterToChoose' id='caterpie' src='assets/images/Caterpie.png' alt='Caterpie'>");
        $("'#" + area + "'").append("<img class='characterToChoose' id='rattata' src='assets/images/Rattata.png' alt='Rattata'>");
        $("'#" + area + "'").append("<img class='characterToChoose' id='gengar' src='assets/images/Gengar.png' alt='Gengar'>");
        $("'#" + area + "'").append("<img class='characterToChoose' id='dragonite' src='assets/images/Dragonite.png' alt='Dragonite'>");
        if (area === 'choose'){
            $('#choose').html("<img src='assets/images/" + (player.charAt(0).toUpperCase() + player.slice(1)) + ".png' alt='Caterpie'>");
        } else if (area === 'enemies'){
            
        }
    }

    function attack (target){
        target.healthPoints -= currentDmg;
        $("#msg").html("You attacked " +
            target.name + "for " + currentDmg + " hp.");
        currentDmg += player.dmg;
    };

    //undisplay anything other than the chosen picture
   /*  $('body').on("click", '#fighter1', function(){
        player = aa;
        enemies.push(bb);
        enemies.push(cc);
        enemies.push(dd);
        $('#choose').html("<img src='assets/images/" + player.name + ".jpg' alt='" + player.name + "'>");
        
        
        
    }); */

    $(document).on("click", ".characterToChoose", function(event){
        player = event.target.id;
    })



    //display enemies in section 2, give each element a class 'enemies', and each a different ID
    function showEnemies(){
        enemies.forEach(function(enemy) {
            $('#enemies').prepend($("<div>").html("<img src='assets/images/" + enemy.name + ".png' alt='" + enemy.name + "'>"));
        });
    }




})