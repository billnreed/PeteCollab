define(["Crafty", "Spawners/PlatformSpawner", "Entities/Platform", "Entities/Player", "Entities/Bullet"], function(Crafty) {
    Crafty.scene("Game", function() {
        Crafty.background("#0dd0ff");
        
        Crafty.e("Platform")
            .platform(100, 100, 200, 10);
        Crafty.e("Platform")
            .platform(30, 150, 200, 10);
        Crafty.e("Platform")
            .platform(20, 200, 30, 10);
        Crafty.e("Platform")
            .platform(20, 250, 40, 10);
        Crafty.e("Platform")
            .platform(50, 300, 70, 10);
        Crafty.e("Platform")
            .platform(20, 350, 40, 10)
        Crafty.e("Platform")
            .platform(0, 400, 100, 10);
        Crafty.e("Platform")
            .platform(230, 500, 30, 10);
        
        
        var player = Crafty.e("Player").player(10, 350);

    });
});