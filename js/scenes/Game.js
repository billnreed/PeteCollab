define(["crafty", "spawners/platform-spawner"], function() {
    Crafty.scene("Game", function() {
        Crafty.background("#73a6e2");
        
        Crafty.e("PlatformSpawner")
            .platformSpawner();

            
        Crafty.e("2D, Canvas, Color, Gravity, Twoway")
            .attr({x: 200, y: 60, w: 40, h: 40})
            .color("#52e852")
            .twoway(3, 6)
            .gravity("Platform");
    });
});