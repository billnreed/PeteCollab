define(["Crafty"], function(Crafty) {
    Crafty.c("LevelOverMenu", {
        _goalColor: "#f2d119",
        
        levelOverMenu: function(x, y) {
            this.requires("2D, DOM, Color, Text")
                .attr({x: x, y: y})
                .text("Winner Chicken")
                .textColor(this._goalColor, 1)
                .textFont({
                    size: '48px',
                    weight: 'bold'
                });
        }
    })
});