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

STAGE_BOUNDS = {x: 0, y: 0, w: 1400, h: 450};
VIEWPORT_BOUNDS = {x: 0, y: 0, w: 700, h: 450};

require(["Crafty", "Scenes/Game"], function(Crafty) {
    Crafty.init(STAGE_BOUNDS.w, STAGE_BOUNDS.h);
    Crafty.viewport.init(VIEWPORT_BOUNDS.w, VIEWPORT_BOUNDS.h);
    Crafty.viewport.mouselook(true);
    
    Crafty.scene("Game");
});