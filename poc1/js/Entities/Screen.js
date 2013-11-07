define(["Crafty"], function(Crafty) {
    var screenDirections = {
        up: "-",
        down: "+"
    };
    
    Crafty.c("Screen", {
        _directionOperations: {
            "-": function(value1, value2) {
                return value1 - value2;
            },
            "+": function(value1, value2) {
                return value1 + value2;
            }
        },
        _directionOperator: null,
        
        screen: function(direction) {
            this._directionOperator = direction;
            
            var attrs = {
                x: 0,
                //y: 0,
                w: STAGE_BOUNDS.w,
                h: STAGE_BOUNDS.h / 2
            };
            if (direction === screenDirections.up) {
                attrs.y = 0;
            } else if (direction === screenDirections.down) {
                attrs.y = STAGE_BOUNDS.h / 2;
            }
            
            this.requires("2D, Canvas, Color, Tween")
                .attr(attrs)
                .color("#000000");
            
            return this;
        },
        
        reveal: function(amount) {
            this.tween({
                y: this._directionOperations[this._directionOperator](this.y, amount)
            }, 50);
                        
            return this;
        },
        
        moveOut: function() {
            if (this._directionOperator === screenDirections.up) {
                this.tween({
                    y: 0 - STAGE_BOUNDS.h / 2
                }, 50);
            } else if (this._directionOperator === screenDirections.down) {
                this.tween({
                    y: STAGE_BOUNDS.h
                }, 50);
            }
            
            return this;
        }
    });
    
    return screenDirections;
});