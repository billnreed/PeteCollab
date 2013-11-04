define(["Crafty"], function(Crafty) {
    Crafty.c("LevelOverMenu", {
        _goalColor: "#f2d119",
        
        init: function() {
            this.requires("2D, DOM, Color, Text")
                .attr({x: 350, y: 225})
                .text("Winner Chicken")
                .textColor(this._goalColor, 1)
                .textFont({
                    size: '48px',
                    weight: 'bold'
                });
        }
    })
});