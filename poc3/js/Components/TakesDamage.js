define(["Crafty"], function(C) {
    Crafty.c("TakesDamage", {
        _health: 0,
        _onDeath: function() {
            this.destroy();
        },
        _onDamage: function() {},
        
        takesDamage: function(health, onDamage, onDeath) {
            this._health = health;
            if (onDeath != null) {
                this._onDeath = onDeath;
            }
            if (onDamage != null) {
                this._onDamage = onDamage;
            }
        },
        
        damage: function(damage) {
            if (this._health - damage <= 0) {
                this._health = 0;
                this._onDeath();
            } else {
                this._health -= damage;
            }
            
            this._onDamage(this._health, damage);
        }
    });
});