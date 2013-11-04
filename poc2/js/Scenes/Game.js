define(["Crafty", "Entities/Player", "Entities/Floor", "Entities/Goal"], function(Crafty) {
    Crafty.scene("Game", function() {
        var backgroundColor = "#1b1a1c";
        var floorColor = "#5c7170";
        var playerColor = "#19f2e8";
        var goalColor = "#f2d119";
        
        Crafty.background(backgroundColor);
        
        Crafty.e("Floor")
            .floor(0, 400, 700, 20);
        
        Crafty.e("Player")
            .player(100, 0);
        
        Crafty.e("Goal")
            .goal(550, 0);
    });
});