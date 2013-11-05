define(["Crafty", "Components/MovesStraight", "Components/DestroyOffstage"], function(Crafty) {
    Crafty.c("Bullet", {
        bullet: function(sourceX, sourceY, direction, speed) {
            this.requires("2D, Canvas, Color, MovesStraight, DestroyOffstage")
                .attr({x: sourceX, y: sourceY, w: 5, h: 4})
                .color("#f5ff00")
                .movesStraight(direction, speed);
        }
    })
});