define(["Crafty"], function(Crafty) {
    Crafty.c("Goal", {
        _revealAmount: 0,
        _hasHit: false,
        
        goal: function(x, y, revealAmount) {
            this._revealAmount = revealAmount;
            
            this.requires("2D, Canvas, Color, Collision")
                .attr({x: x, y: y, w: 10, h: 15})
                .color("#ff0")
                .bind("EnterFrame", this._revealScreens);
            
            return this;
        },
        
        _revealScreens: function() {
            var amount = this._revealAmount;
            if (!this._hasHit && this.hit("Player")) {
                Crafty("Screen").each(function(screen) {
                    this.reveal(amount);
                });

                this._hasHit = true;
            }
        }
    });
});