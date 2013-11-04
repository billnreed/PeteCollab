define(["Crafty", "Components/MovesStraight"], function(Crafty) {
    describe("A MovesStraight Component", function() {
        it("moves the correct direction when 'left' is specified", function() {
            var ms = Crafty.e("MovesStraight")
                        .attr({x: 0, y: 0})
                        .movesStraight("left", 3);
            
            Crafty.timer.simulateFrames(1);
            
            expect(ms.x).toBeLessThan(0);
        });
        
        it("moves the correct direction when 'right' is specified", function() {
            var ms = Crafty.e("MovesStraight")
                        .attr({x: 0, y: 0})
                        .movesStraight("right", 3);
            
            Crafty.timer.simulateFrames(1);
            
            expect(ms.x).toBeGreaterThan(0);
        });
        
        it("moves the given speed each time to the right", function() {
            var ms = Crafty.e("MovesStraight")
                        .attr({x: 0, y: 0})
                        .movesStraight("right", 3);
            
            Crafty.timer.simulateFrames(1);
            
            expect(ms.x).toBe(3);
        });
        
        it("moves the given speed each time to the left", function() {
            var ms = Crafty.e("MovesStraight")
                        .attr({x: 0, y: 0})
                        .movesStraight("left", 3);
            
            Crafty.timer.simulateFrames(1);
            
            expect(ms.x).toBe(-3);
        });
    });
});