define(["Crafty", "HUD/HUDTextElement", "HUD/HUDRectElement"], function(Crafty) {
    Crafty.c("HUD", {
        _height: 100,
        _width: VIEWPORT_BOUNDS.w,
        _speedTokenValue: null,
        
        init: function() {
            var background = Crafty.e("HUDRectElement")
                .hudRectElement(0, 400, 750, 50, "#171617");
            
            var speedTokenLabel = Crafty.e("HUDTextElement")
                .hudTextElement(20, 417, "Speed Tokens:");
            this._speedTokenValue = Crafty.e("HUDTextElement")
                .hudTextElement(120, 417, "0");
            
            var self = this;
            Crafty.bind("COLLECTED_SPEED_TOKEN", function(speedTokenCount) {
                self._speedTokenValue.text("" + speedTokenCount); 
            });
        } 
    });
});