define(["crafty", "components/moves-straight", "components/platform", "spawners/platform-spawner"], function() {
    Crafty.scene("Game", function() {
        Crafty.background("#73a6e2");
        
        Crafty.e("PlatformSpawner")
            .platformSpawner();

            
        Crafty.e("2D, Canvas, Color, Gravity, Twoway")
            .attr({x: 200, y: 200, w: 100, h: 100})
            .color("#52e852")
            .twoway(3, 6)
            .gravity("Platform");
    });
});