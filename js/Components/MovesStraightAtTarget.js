define(["crafty"], function(Crafty) {
    Crafty.c("MovesStraightAtTarget", {
        _targetVector: null,
        _speed: 0,
        
        movesStraight: function(targetX, targetY, speed) {
            this._targetVector = new Crafty.math.Vector2D(targetX - this.x, targetY - this.y).normalize();
            this._speed = speed;
            
            this.requires("2D")
                .bind("EnterFrame", this._move);
            
            return this;
        },

        _move: function() {
            this.shift(this._targetVector.x * this._speed, this._targetVector.y * this._speed);
        }
    });
});