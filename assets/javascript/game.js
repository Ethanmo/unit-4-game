$(document).ready(function(){


    //fighter class constructor
    function Fighter (fighterName, dmg, def, hp) {
        this.name = fighterName;
        this.dmg = dmg;
        this.def = def;
        this.hp = hp;
    }

    var aa = new Fighter('ph1', 1, 1, 1);
    var bb = new Fighter('ph2', 1, 1, 1);
    var cc = new Fighter('ph3', 1, 1, 1);
    var dd = new Fighter('ph4', 1, 1, 1);
    //console.log(dd);

    var player;
    var currentDmg;
    var enemies = [];
    
    //$('#choose').html($('#fighter1').attr('alt'));

    $('body').on("click", '#fighter1', function(){
        player = aa;
        enemies.push(bb);
        enemies.push(cc);
        enemies.push(dd);
        $('#choose').html("<img src='assets/images/" + player.name + ".jpg' alt='" + player.name + "'>");
        
        
        
        
        
    });

    //display enemies in section 2
    function showEnemies(){
        enemies.forEach(function(enemy) {
            $('#enemies').prepend($("<div>").html("<img src='assets/images/" + enemy.name + ".jpg' alt='" + enemy.name + "'>"));
        });
    }




})