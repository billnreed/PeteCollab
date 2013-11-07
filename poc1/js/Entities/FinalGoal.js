define(["Crafty", "Entities/Goal"], function(Crafty) {
    Crafty.c("FinalGoal", {
        _hasHit: false,

        finalGoal: function(x, y, revealAmount) {
            this.requires("Goal, Collision")
                .goal(x, y, revealAmount)
        },        
        
        //override Goal._onHit
        _onHit: function() {
            if (!this._hasHit && this.hit("Player")) {
                Crafty("Screen").each(function() {
                    this.moveOut();
                });
                
                this._hasHit = true;
            }
        }
    });
});