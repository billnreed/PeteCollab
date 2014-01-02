define(["Crafty", "StageBounds", "Entities/Player", "Entities/Enemy"], function(C, stageBounds, Player) {
    C.scene("Game", function() {
        C.background("#484453");
        
        C.e("Player").player(stageBounds.w / 2, stageBounds.h - 100);
        
        C.e("Enemy").enemy(50, 50);
        C.e("Enemy").enemy(150, 50);
        C.e("Enemy").enemy(250, 50);
    });
});