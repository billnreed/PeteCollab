define(["Crafty", "Entities/Player", "Entities/Floor", "Entities/Goal", "Entities/SpeedToken", "HUD/HUD"], function(Crafty) {
    Crafty.scene("Game", function() {
        var backgroundColor = "#1b1a1c";
        
        Crafty.background(backgroundColor);
        
        //weird thing to get the viewport correct
        //this places a box in the top left corner and bottom left corner, effectively setting the viewport's bounding box's height
        Crafty.e("2D, Canvas")
            .attr({x: 0, y: 0, w: 50, h: 50});
        Crafty.e("2D, Canvas")
            .attr({x: 0, y:400, w: 50, h:50});
        
        //floor
        Crafty.e("Floor")
            .floor(0, 200, 700, 20);
        Crafty.e("Floor")
            .floor(800, 300, 600, 20);
        
        //tokens
        Crafty.e("SpeedToken")
            .speedToken(200, 180);
        Crafty.e("SpeedToken")
            .speedToken(300, 180);
        Crafty.e("SpeedToken")
            .speedToken(400, 180);
        Crafty.e("SpeedToken")
            .speedToken(500, 180);
        Crafty.e("SpeedToken")
            .speedToken(600, 180);
        Crafty.e("SpeedToken")
            .speedToken(700, 180);
        
        //player
        var player = Crafty.e("Player")
            .player(100, 0);
        
        //goal
        Crafty.e("Goal")
            .goal(1300, 0);
        
        //hud
        Crafty.e("HUD");
        
        Crafty.viewport.follow(player);
    });
});