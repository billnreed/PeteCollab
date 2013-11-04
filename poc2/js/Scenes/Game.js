define(["Crafty", "Entities/Player"], function(Crafty) {
    Crafty.scene("Game", function() {
        var backgroundColor = "#1b1a1c";
        var floorColor = "#5c7170";
        var playerColor = "#19f2e8";
        var goalColor = "#f2d119";
        
        Crafty.background(backgroundColor);
        
        Crafty.e("Floor, 2D, Canvas, Color")
            .attr({x: 0, y: 400, w: 700, h: 20})
            .color(floorColor);
        
        Crafty.e("Player")
            .player(20, 0);
        
        Crafty.e("Goal, 2D, Canvas, Color, Gravity, Collision")
            .attr({x: 640, y: 0, w: 50, h: 50})
            .color(goalColor)
            .gravity("Floor")
            .collision()
            .onHit("Player", function() {
                Crafty.e("2D, DOM, Color, Text")
                    .attr({x: 350, y: 225,})
                    .text("Winner")
                    .textColor(goalColor, 1)
                    .textFont({
                        size: '48px',
                        weight: 'bold'
                    });
            });
    });
});