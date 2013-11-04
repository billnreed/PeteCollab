define(["crafty"], function() {
    Crafty.c("Player", {
        player: function() {
            this.requires("2D, Canvas, Color, Gravity, Twoway")
                .attr({x: 200, y: 60, w: 40, h: 40})
                .color("#52e852")
                .twoway(3, 6)
                .gravity("Platform");
        }
    }) 
});