define(["Crafty", "Entities/Screen", "Entities/Platform", "Entities/Player", "Entities/Goal", "Entities/FinalGoal"], function(Crafty, directions) {
    Crafty.scene("Game", function() {
        Crafty.background("#0dd0ff");
        
        var player = Crafty.e("Player").player(100, 260);
    
        Crafty.e("Platform")
            .platform(30, 150, 200, 10);
        Crafty.e("Platform")
            .platform(20, 200, 30, 10);
        Crafty.e("Platform")
            .platform(20, 250, 40, 10);
        Crafty.e("Platform")
            .platform(50, 300, 70, 10);
        Crafty.e("Platform")
            .platform(230, 500, 30, 10);
        
        Crafty.e("Goal")
            .goal(60, 285, 50);
        Crafty.e("Goal")
            .goal(30, 185, 50);
        Crafty.e("Goal")
            .goal(200, 135, 60);
        Crafty.e("Goal, FinalGoal")
            .goal(240, 485, 80);
        
        var topScreen = Crafty.e("Screen")
            .screen(directions.up);
        var bottomScreen = Crafty.e("Screen")
            .screen(directions.down);
        topScreen.reveal(60);
        bottomScreen.reveal(60);
        
    });
});