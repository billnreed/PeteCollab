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

STAGE_BOUNDS = {x: 0, y: 0, w: 350, h: 600};

require(["Crafty", "Scenes/Game"], function(Crafty) {
    Crafty.init(STAGE_BOUNDS.w, STAGE_BOUNDS.h);
    
    Crafty.scene("Game");
});