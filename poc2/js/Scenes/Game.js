define(["Crafty", "Entities/Player", "Entities/Floor", "Entities/Goal"], function(Crafty) {
    Crafty.scene("Game", function() {
        var backgroundColor = "#1b1a1c";
        
        Crafty.background(backgroundColor);
        
        //weird thing to get the viewport correct
        //this places a box in the top left corner and bottom left corner, effectively setting the viewport's bounding box's height
        Crafty.e("2D, Canvas")
            .attr({x: 0, y: 0, w: 50, h: 50});
        Crafty.e("2D, Canvas")
            .attr({x: 0, y:400, w: 50, h:50});
        
        Crafty.e("Floor")
            .floor(0, 400, 700, 20);
        
        var player = Crafty.e("Player")
            .player(100, 0);
        
        Crafty.e("Goal")
            .goal(550, 0);
        
//        Crafty.viewport.follow(player);
    });
});