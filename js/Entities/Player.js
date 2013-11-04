define(["Crafty"], function(Crafty) {
    Crafty.c("Player", {
        _direction: "right",  
        
        player: function() {
            this.requires("2D, Canvas, Color, Gravity, Twoway, Keyboard")
                .attr({x: 200, y: 60, w: 40, h: 40})
                .color("#52e852")
                .twoway(3, 6)
                .gravity("Platform")
                .bind("KeyDown", this._handleInput);
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
            var bulletY = this.y + 20 - 2;
            
            if (this._isFacingLeft()) {
                bulletX = this.x - 10;
            }
            if (this._isFacingRight()) {
                bulletX = this.x + 40;
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