define(["Crafty"], function(Crafty) {
    Crafty.c("HUDRectElement", {
        hudRectElement: function(x, y, w, h, color) {
            this.requires("2D, DOM, Color")
                .attr({x: x, y: y, w: w, h: h})
                .color(color);
            
            this._element.parentNode.removeChild(this._element);
            Crafty.stage.elem.appendChild(this._element);
//            this.z = 1;
            
            return this;
        }
    });    
});