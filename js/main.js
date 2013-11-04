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

STAGE_BOUNDS = {x: 0, y: 0, w: 450, h: 700};

require(["Crafty", "Scenes/Game"], function(Crafty) {
    Crafty.init(450, 700);
    
    Crafty.scene("Game");
});