define(["Crafty", "Entities/Platform", "Entities/Player", "Entities/TopScreen", "Entities/BottomScreen", "Entities/Goal", "Entities/FinalGoal"], function(Crafty) {
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
        
        var topScreen = Crafty.e("TopScreen");
        var bottomScreen = Crafty.e("BottomScreen");
        topScreen.reveal(60);
        bottomScreen.reveal(60);
        
        Crafty.bind("REVEAL", function(revealData) {
            var amount = revealData.amount;
            
            topScreen.reveal(amount);
            bottomScreen.reveal(amount);
        });
        
        Crafty.bind("FINAL_REVEAL", function() {
            topScreen.moveOut();
            bottomScreen.moveOut();
        });
    });
});