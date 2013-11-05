define(["Crafty"], function(Crafty) {
    Crafty.c("FinalGoal", {
        _hasHit: false,

        init: function() {
            this.requires("Collision")
                .bind("EnterFrame", this._checkForHit)
        },        
        
        _checkForHit: function() {
            if (!this._hasHit && this.hit("Player")) {
                Crafty.trigger("FINAL_REVEAL");
                
                this._hasHit = true;
            }
        }
    });
});