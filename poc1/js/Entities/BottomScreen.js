define(["Crafty"], function(Crafty) {
    Crafty.c("BottomScreen", {
        init: function() {
            this.requires("2D, Canvas, Color, Tween")
                .attr({x: 0, y: STAGE_BOUNDS.h / 2, w: STAGE_BOUNDS.w, h: STAGE_BOUNDS.h / 2})
                .color("#000000");
        },
        
        reveal: function(amount) {
            this.tween({y: this.y + amount}, 50);
        },
        
        moveOut: function() {
            this.tween({y: STAGE_BOUNDS.h}, 50);
        }
    });
});