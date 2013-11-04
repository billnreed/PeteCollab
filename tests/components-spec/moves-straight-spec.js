define(["crafty", "components/moves-straight"], function(Crafty) {
    describe("A MovesStraight component", function() {
        describe("moving right", function() {
            var ms;
            
            beforeEach(function() {
                var sourceX = 0;
                var sourceY = 0;
                var targetX = 10;
                var targetY = 0;
                var speed = 2;
                ms = Crafty.e("MovesStraight")
                    .attr({x: sourceX, y: sourceY})
                    .movesStraight(targetX, targetY, speed);
            });
            
            afterEach(function() {
                ms.destroy();
            })
            
            it("moves towards its target", function() {
                Crafty.timer.simulateFrames(1);
                
                expect(ms.x).toBe(2);
                expect(ms.y).toBe(0);
            });
            
            it("moves at the given speed", function() {
                Crafty.timer.simulateFrames(5);
                
                expect(ms.x).toBe(10);
                expect(ms.y).toBe(0);
            });  
        })
    });
});