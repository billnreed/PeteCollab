define(["Crafty", "Spawners/PlatformSpawner", "Entities/Player", "Entities/Bullet"], function(Crafty) {
    Crafty.scene("Game", function() {
        Crafty.background("#73a6e2");
        
        Crafty.e("PlatformSpawner")
            .platformSpawner();
        
        Crafty.e("Bullet")
            .bullet(100, 100, "right", 3);
        
        Crafty.e("Player").player();
    });
});