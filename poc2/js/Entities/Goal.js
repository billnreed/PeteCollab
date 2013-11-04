define(["Crafty", "Entities/LevelOverMenu"], function(Crafty) {
    Crafty.c("Goal", {
        _width: 50,
        _height: 50,
        _goalColor: "#f2d119",
        
        goal: function(x, y) {
            this.requires("2D, Canvas, Color, Gravity, Collision")
                .attr({x: x, y: y, w: this._width, h: this._height})
                .color(this._goalColor)
                .gravity("Floor")
                .collision()
                .onHit("Player", function() {
                    Crafty.e("LevelOverMenu")
                        .levelOverMenu(1000, 200);
                });
            
            return this;
        }
    })
});