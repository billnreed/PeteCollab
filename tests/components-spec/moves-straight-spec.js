define(["crafty", "components/moves-straight"], function(Crafty) {
    xdescribe("A MovesStraight component", function() {
        var ms;
        
        beforeEach(function() {
            var sourceX = 0;
            var sourceY = 0;
            var targetX = 10;
            var targetY = 0;
            var speed = 2;
            ms = Crafty.e("MovesStraight, 2D")
                .attr({x: sourceX, y: sourceY})
                .movesStraight(targetX, targetY, speed);
        });
        
        it("moves towards its target", function() {
            Crafty.timer.step();
            
            expect(ms.x).toBe(2);
            expect(ms.y).toBe(0);
        });
        
        it("moves at the given speed", function() {
            
        });
    });
});