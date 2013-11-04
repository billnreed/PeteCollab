define(["Crafty"], function(Crafty) {
    Crafty.c("Player", {
        player: function() {
            this.requires("2D, Canvas, Color, Gravity, Twoway, Keyboard")
                .attr({x: 200, y: 60, w: 40, h: 40})
                .color("#52e852")
                .twoway(3, 6)
                .gravity("Platform")
                .bind("KeyDown", this._fire);
        },
        
        _fire: function(keyEvent) {
            if (this.isDown(Crafty.keys.SPACE)) {
                Crafty.e("Bullet");
            }
        }
    }) 
});