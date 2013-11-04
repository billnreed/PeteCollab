define(["Crafty"], function(Crafty) {
    Crafty.c("Player", {
        _width: 30,
        _height: 30,
        _playerColor: "#19f2e8",
        
        _speedTokens: 0,
        
        player: function(playerX, playerY) {
            this.requires("2D, Canvas, Color, Gravity, Twoway, Collision")
                .attr({x: playerX, y: playerY, w: 30, h: 30})
                .color(this._playerColor)
                .gravity("Floor")
                .twoway(3, 0)
                .onHit("SpeedToken", this._collectSpeedToken);
            
            return this;
        },
        
        _collectSpeedToken: function(collision) {
            this._speedTokens += 1;
            
            var speedToken = collision[0].obj;
            speedToken.destroy();
            
            Crafty.trigger("COLLECTED_SPEED_TOKEN", this._speedTokens);
        },
    });
});