define(["Crafty", "Components/MovesStraightUp", "Components/DestroyOffstage"], function() {
    Crafty.c("Bullet", {
        _width: 2,
        _height: 8,
        _baseDamage: 2,
        
        init: function() {
            this.requires("2D, Canvas, Color, MovesStraightUp, DestroyOffstage, Collision")
                .attr({
                    w: this._width,
                    h: this._height
                })
                .color("#0ff")
                .onHit("Enemy", this._onHitEnemy);
        },
        
        bullet: function(x, y) {
            this.x = x;
            this.y = y; 
        },
        
        _onHitEnemy: function(collisionData) {
            var collisionEntity = collisionData[0].obj;
            
            this._distributeDamage(collisionEntity);
            
            this.destroy();
        },
        
        _distributeDamage: function(collisionEntity) {
            var enemiesToDamage = [collisionEntity];
            
            Crafty("Enemy").each(function() {
                if (this.distanceFrom(collisionEntity) < 150 && !this.equals(collisionEntity)) {                
                    enemiesToDamage.push(this);
                }
            });
            
            var damageAmount = this._baseDamage + enemiesToDamage.length - 1;
            for (var i = 0; i < enemiesToDamage.length; i++) {
                enemiesToDamage[i].damage(damageAmount);
            }
        }
    });
});