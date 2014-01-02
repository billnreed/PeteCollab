define(["Crafty", "StageBounds"], function(Crafty, stageBounds) {
    Crafty.c("DestroyOffstage", {
        _hasBeenOnStage: false,
        
        init: function() {
            this.requires("2D")
                .bind("EnterFrame", this._destroyOffstage);
        },
            
        _destroyOffstage: function() {
            if (this._hasBeenOnStage) {
                if (!this.intersect(stageBounds)) {
                    this.destroy();
                }
            } else {
                if (this.within(stageBounds)) {
                    this._hasBeenOnStage = true;
                }
            }
        }
    });
});