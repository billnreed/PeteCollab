define(["crafty", "components/moves-straight", "components/platform"], function() {
    Crafty.scene("Game", function() {
        Crafty.background("#73a6e2");
        
        Crafty.e("Platform")
            .platform(100, 600, 2, 500, 20);
        
        Crafty.e("Platform")
            .platform(700, 600, 2, 500, 20);

            
        Crafty.e("2D, Canvas, Color, Gravity, Twoway")
            .attr({x: 200, y: 200, w: 100, h: 100})
            .color("#52e852")
            .twoway(3, 6)
            .gravity("Platform");
    });
});