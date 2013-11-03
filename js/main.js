require.config({
    paths: {
        crafty: "libs/crafty"
    }
});

require(["crafty", "scenes/Game"], function(Crafty) {
    Crafty.init(450, 700);
    
    Crafty.scene("Game");
});