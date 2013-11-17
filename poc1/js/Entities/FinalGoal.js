define(["Crafty", "Entities/Goal"], function(Crafty) {
    Crafty.c("FinalGoal", {
        _hasHit: false,

        finalGoal: function(x, y, revealAmount) {
            this.requires("2D, Canvas, Color, Collision")
                .attr({x: x, y: y, w: 10, h: 15})
                .color("#f0f")
                .bind("EnterFrame", this._onHit);
        },        
        
        
        _onHit: function() {
            if (!this._hasHit && this.hit("Player")) {
                Crafty("Screen").each(function() {
                    this.moveOffScreen();
                });
                
                this._hasHit = true;
            }
        }
    });
});