define(["Crafty"], function(Crafty) {
    Crafty.c("MovesStraight", {
        _vx: 0,
        
        movesStraight: function(direction, speed) {
            if (direction === "left") {
                this._vx = -1 * speed;
            } else if (direction === "right") {
                this._vx = speed;
            }
            
            this.requires("2D")
                .bind("EnterFrame", this._move);
            
            return this;
        },
        
        _move: function() {
            this.x += this._vx;
        }
    })
});