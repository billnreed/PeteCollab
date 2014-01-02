define(["Crafty"], function(Crafty) {
    Crafty.c("MovesStraightUp", {
        _speed: 4,
        
        init: function() {
            this.requires("2D")
                .bind("EnterFrame", this._move);
            
            return this;
        },
        
        _move: function() {
            this.y -= this._speed;
        }
    })
});