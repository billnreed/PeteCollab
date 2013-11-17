define(["Crafty", "Entities/Screen", "Entities/Platform", "Entities/Player", "Entities/Goal", "Entities/FinalGoal"], function(Crafty, directions) {
    var levelData = {
        player: {x: 100, y: 260},
        platforms: [
            {x: 30, y: 150, width: 200, height: 10},
            {x: 20, y: 200, width: 30, height: 10},
            {x: 20, y: 250, width: 40, height: 10},
            {x: 50, y: 300, width: 70, height: 10},
            {x: 230, y: 500, width: 30, height: 10}
        ],
        goals: [
            {x: 60, y: 285, revealAmount: 50},
            {x: 30, y: 185, revealAmount: 50},
            {x: 200, y: 135, revealAmount: 60}
        ],
        finalGoal: {x: 240, y: 485},
        topScreen: {direction: directions.up},
        bottomScreen: {direction: directions.down},
        initialRevealAmount: 60
    };
    
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