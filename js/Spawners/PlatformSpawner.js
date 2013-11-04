define(["crafty", "Entities/Platform"], function() {
    Crafty.c("PlatformSpawner", {
        _interval: 1000,
        _yRange: {from: 0, to: 700},
        _widthRange: {from: 200, to: 500},
        
        platformSpawner: function() {
            this.requires("Delay");
            
            this._spawn();
            
            return this;
        },
        
        _spawn: function() {
            Crafty.e("Platform")
                .platform(STAGE_BOUNDS.w, this._generateYCoordinate(), 2, this._generateWidth(), 20);
            
            this.delay(function() {
                this._spawn();
            }, this._interval);
        },
                          
        _generateYCoordinate: function() {
            return this._getRandomFromRange(this._yRange);
        },
        
        _generateWidth: function() {
            return this._getRandomFromRange(this._widthRange);
        },
        
        _getRandomFromRange: function(range) {
            return Math.random() * (range.to - range.from) + range.from;
        }
    });
});