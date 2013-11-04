define(["Crafty"], function(Crafty) {
    Crafty.c("SpeedToken", {
        _width: 10,
        _height: 10,
        _tokenColor: "#1ced14",
        
        speedToken: function(x, y) {
            this.requires("2D, Canvas, Color")
                .attr({x: x, y: y, w: this._width, h: this._height})
                .color(this._tokenColor);
        } 
    });
});