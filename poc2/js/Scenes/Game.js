define(["Crafty", "Spawners/PlatformSpawner", "Entities/Player", "Entities/Bullet"], function(Crafty) {
    Crafty.scene("Game", function() {
        Crafty.background("#73a6e2");
        
        Crafty.e("PlatformSpawner")
            .platformSpawner();
        
        var player = Crafty.e("Player").player();
        
//        Crafty.viewport.bounds = {
//            min: {
//                x: STAGE_BOUNDS.x,
//                y: STAGE_BOUNDS.y
//            }, 
//            max: {
//                x: STAGE_BOUNDS.w,
//                y: STAGE_BOUNDS.h
//            }
//        };
//        Crafty.viewport.init(450, 350);
//        Crafty.viewport.follow(player, 0, 0);
    });
});