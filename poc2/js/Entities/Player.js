define(["Crafty"], function(Crafty) {
    Crafty.c("Player", {
        _width: 30,
        _height: 30,
        _playerColor: "#19f2e8",
        
        player: function(playerX, playerY) {
            this.requires("2D, Canvas, Color, Gravity, Twoway")
                .attr({x: 100, y: 100, w: 30, h: 30})
                .color(this._playerColor)
                .gravity("Floor")
                .twoway(3, 0)
            
            return this;
        }
    });
});