define(["Crafty", "Entities/Goal"], function(Crafty) {
    Crafty.c("FinalGoal", {
        _hasHit: false,

        init: function() {
            
        },

        finalGoal: function(x, y, revealAmount) {
            this.requires("Goal, Collision")
                .goal(x, y, revealAmount)
                .bind("EnterFrame", this._checkForHit);
        },        
        
        _checkForHit: function() {
            if (!this._hasHit && this.hit("Player")) {
                Crafty("Screen").each(function() {
                    this.moveOut();
                });
                
                this._hasHit = true;
            }
        }
    });
});