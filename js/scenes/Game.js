define(["crafty", "components/moves-straight"], function() {
    Crafty.scene("Game", function() {
        Crafty.background("#73a6e2");
        
        Crafty.e("Platform, MovesStraight, 2D, Canvas, Color")
            .attr({x: 100, y: 600, w: 500, h: 20})
            .color("#5d5447")
            .movesStraight(-1000, 600, 2);
        
        Crafty.e("Platform, MovesStraight, 2D, Canvas, Color")
            .attr({x: 700, y: 600, w: 500, h: 20})
            .color("#5d5447")
            .movesStraight(-1000, 600, 2);
        
        Crafty.e("2D, Canvas, Color, Gravity, Twoway")
            .attr({x: 200, y: 200, w: 100, h: 100})
            .color("#52e852")
            .twoway(3, 6)
            .gravity("Platform");
            
    });
});