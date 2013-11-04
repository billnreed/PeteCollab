define(["Crafty", "Components/MovesStraight", "Components/DestroyOffstage"], function(Crafty) {
    Crafty.c("Bullet", {
        bullet: function(sourceX, sourceY, direction, speed) {
            this.requires("2D, Canvas, Color, MovesStraight, DestroyOffstage")
                .attr({x: sourceX, y: sourceY, w: 10, h: 4})
                .color("#dde50d")
                .movesStraight(direction, speed);
        }
    })
});