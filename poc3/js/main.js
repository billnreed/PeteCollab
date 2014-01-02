require.config({
    paths: {
        Crafty: "libs/crafty"
    },
    
    shim: {
        Crafty: {
            exports: "Crafty"
        }
    }
});

require(["Crafty", "StageBounds", "Scenes/Game"], function(Crafty, stageBounds) {
    Crafty.init(stageBounds.w, stageBounds.h);
    
    Crafty.scene("Game");
});