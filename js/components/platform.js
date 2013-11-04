define(["crafty", "components/moves-straight"], function() {
    Crafty.c("Platform", {
        _initialX: 0,
        _initialY: 0,
        _width: 100,
        _height: 20,
        _speed: 0,
        
        platform: function(initialX, initialY, speed, width, height) {
            this._initialX = initialX;
            this._initialY = initialY;
            this._speed = speed;
            this._width = width;
            this._height = height;
            
            this.requires("2D, Canvas, Color, MovesStraight")
                .attr({x: this._initialX, y: this._initialY, w: this._width, h: this._height})
                .color("#5d5447")
                .movesStraight(-1000, this._initialY, speed);
            
            return this;
        }
    });
})