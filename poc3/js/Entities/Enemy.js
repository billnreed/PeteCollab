define(["Crafty", "Components/TakesDamage"], function(Crafty) {
    Crafty.c("Enemy", {
        _width: 32,
        _height: 32,
        _text: null,
        
        init: function() {
            this.requires("2D, Canvas, Color, TakesDamage")
            .attr({
                x: 50,
                y: 50,
                w: this._width,
                h: this._height
            })
            .color("#ff00b1")
            .takesDamage(10);
        },
        
        enemy: function(x, y) {
            this.x = x;
            this.y = y;
            
//            this._text = Crafty.e("2D, DOM, Text")
//                .attr({
//                    x: this.x + 2,
//                    y: this.y + 2
//                })
//                .text(this._health);
        },
        
        equals: function(otherEnemy) {
            return this[0] == otherEnemy[0];
        },
        
        distanceFrom: function(otherEnemy) {
            var a = Math.abs(otherEnemy.x - this.x);
            var b = Math.abs(otherEnemy.y - this.y);
            var a2 = a * a;
            var b2 = b * b;
            var c = Math.sqrt(a2 + b2);
            
            return c;
        }
    });
});