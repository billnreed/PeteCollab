define(["Crafty"], function(Crafty) {
    Crafty.c("Player", {
        _width: 5,
        _height: 10,
        _direction: "right",  
        
        player: function(x, y) {
            this.requires("2D, Canvas, Color, Gravity, Twoway, Keyboard")
                .attr({x: x, y: y, w: this._width, h: this._height})
                .color("#000")
                .twoway(3, 5)
                .gravity("Platform")
                .bind("KeyDown", this._handleInput);
            
            return this;
        },
        
        _handleInput: function(keyEvent) {
            if (this.isDown(Crafty.keys.SPACE)) {
                this._fire();
            }
            
            if (this.isDown(Crafty.keys.LEFT_ARROW) || this.isDown(Crafty.keys.A)) {
                this._direction = "left";
            }
            if (this.isDown(Crafty.keys.RIGHT_ARROW) || this.isDown(Crafty.keys.D)) {
                this._direction = "right";
            }
        },
        
        _fire: function() {
            var bulletX;
            var bulletY = this.y + this._height / 7;
            
            if (this._isFacingLeft()) {
                bulletX = this.x - 5;
            }
            if (this._isFacingRight()) {
                bulletX = this.x + this._width + 5;
            }
            
            Crafty.e("Bullet")
                .bullet(bulletX, bulletY, this._direction, 5);
        },
        
        _isFacingLeft: function() {
            return this._direction === "left";
        },

        _isFacingRight: function() {
            return this._direction === "right";
        },
    }) 
});