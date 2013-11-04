define(["crafty", "Spawners/PlatformSpawner", "Entities/Player"], function(Crafty) {
    Crafty.scene("Game", function() {
        Crafty.background("#73a6e2");
        
        Crafty.e("PlatformSpawner")
            .platformSpawner();
        
        Crafty.e("Player").player();
    });
});