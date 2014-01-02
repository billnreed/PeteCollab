define(["Crafty", "Entities/Bullet"], function(C) {
    C.c("Player", {
        _width: 32,
        _height: 32,
        
        player: function(x, y) {
            this.requires("2D, Canvas, Color, Fourway, Keyboard")
                .attr({x: x, y: y, w: this._width, h: this._height})
                .color("#cef452")
                .fourway(4)
                .bind("KeyDown", this._handleInput);
            
            return this;
        },
        
        _handleInput: function(keyEvent) {
            if (this.isDown(C.keys.SPACE)) {
                this._fire();
            }
        },
        
        _fire: function() {
            Crafty.e("Bullet").bullet(this.x + this._width / 2, this.y);
        },
    }) 
});