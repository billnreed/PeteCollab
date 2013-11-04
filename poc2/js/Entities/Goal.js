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
//                    Crafty.e("2D, DOM, Color, Text")
//                        .attr({x: 350, y: 225,})
//                        .text("Winner")
//                        .textColor(this._goalColor, 1)
//                        .textFont({
//                            size: '48px',
//                            weight: 'bold'
//                        });
                    Crafty.e("LevelOverMenu");
                });
            
            return this;
        }
    })
});