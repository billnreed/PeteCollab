define(["Crafty", "Components/MovesStraightAtTarget", "Components/DestroyOffstage"], function(Crafty) {
    Crafty.c("Platform", {
        _initialX: 0,
        _initialY: 0,
        _width: 100,
        _height: 20,
        
        platform: function(x, y, width, height) {           
            this.requires("2D, Canvas, Color, DestroyOffstage")
                .attr({x: x, y: y, w: width, h: height})
                .color("#fff");
            
            return this;
        }
    });
})