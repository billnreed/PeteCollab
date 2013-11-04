define(["crafty", "Spawners/PlatformSpawner", "Components/Player"], function() {
    Crafty.scene("Game", function() {
        Crafty.background("#73a6e2");
        
        Crafty.e("PlatformSpawner")
            .platformSpawner();
        
        Crafty.e("Player").player();
    });
});