define(["Crafty"], function(Crafty) {
    Crafty.c("Player", {
        _width: 30,
        _height: 30,
        _playerColor: "#19f2e8",
        
        _left: false,
        _right: false,
        
        _speedTokens: 1,
        
        player: function(playerX, playerY) {
            this.requires("2D, Canvas, Color, Gravity, Keyboard, Collision")
                .attr({x: playerX, y: playerY, w: 30, h: 30})
                .color(this._playerColor)
                .gravity("Floor")
                .onHit("SpeedToken", this._collectSpeedToken)
                .bind("KeyDown", this._handleKeyPress)
                .bind("KeyUp", this._handleKeyPress)
                .bind("EnterFrame", this._move);
            
            return this;
        },
        
        _collectSpeedToken: function(collision) {
            this._speedTokens += 1;
            
            var speedToken = collision[0].obj;
            speedToken.destroy();
            
            Crafty.trigger("COLLECTED_SPEED_TOKEN", this._speedTokens);
        },
        
        _handleKeyPress: function() {            
            this._left = this.isDown(Crafty.keys.A);
            this._right = this.isDown(Crafty.keys.D);
        },
        
        _move: function() {
            if (this._left) {
                this.x -= this._speedTokens;
            }
            
            if (this._right) {
                this.x += this._speedTokens;
            }
        }
    });
});