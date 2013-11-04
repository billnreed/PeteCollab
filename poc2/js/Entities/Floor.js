define(["Crafty"], function(Crafty) {
    Crafty.c("Floor", {
        _floorColor: "#5c7170",
        
        floor: function(x, y, w, h) {
            this.requires("2D, Canvas, Color")
                .attr({x: x, y: y, w: w, h: h})
                .color(this._floorColor);
            
            return this;
        } 
    });
});