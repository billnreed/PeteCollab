define(["Directions"], function(directions) {
    return {
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
});