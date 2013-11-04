require.config({
    paths: {
        crafty: "libs/crafty"
    }
});

STAGE_BOUNDS = {x: 0, y: 0, w: 450, h: 700};

require(["crafty", "Scenes/Game"], function(Crafty) {
    Crafty.init(450, 700);
    
    Crafty.scene("Game");
});