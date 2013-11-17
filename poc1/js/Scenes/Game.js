define(["Crafty", "Levels/Level1", "Entities/Screen", "Entities/Platform", "Entities/Player", "Entities/Goal", "Entities/FinalGoal"], function(Crafty, level1, directions) {
    var levelData = level1;
    
    Crafty.scene("Game", function() {
        Crafty.background("#0dd0ff");
        
        var level = createLevel(levelData);
        
        var initialRevealAmount = level.initialRevealAmount;
        level.topScreen.reveal(initialRevealAmount);
        level.bottomScreen.reveal(initialRevealAmount);
    });
    
    var createLevel = function(levelData) {
        var player = Crafty.e("Player").player(levelData.player.x, levelData.player.y);
            
        for (var i = 0; i < levelData.platforms.length; i++) {
            var platformData = levelData.platforms[i];
            Crafty.e("Platform")
                .platform(platformData.x, platformData.y, platformData.width, platformData.height);
        }
        
        for (var i = 0; i < levelData.goals.length; i++) {
            var goalData = levelData.goals[i];
            Crafty.e("Goal")
                .goal(goalData.x, goalData.y, goalData.revealAmount);
        }
        
        Crafty.e("FinalGoal")
            .finalGoal(levelData.finalGoal.x, levelData.finalGoal.y);
        
        var topScreen = Crafty.e("Screen")
            .screen(levelData.topScreen.direction);
        var bottomScreen = Crafty.e("Screen")
            .screen(levelData.bottomScreen.direction);
        var initialRevealAmount = levelData.initialRevealAmount;
        
        return {
            topScreen: topScreen,
            bottomScreen: bottomScreen,
            initialRevealAmount: initialRevealAmount
        };
    }
});