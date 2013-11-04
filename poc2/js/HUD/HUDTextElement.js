define(["Crafty"], function(Crafty) {
    Crafty.c("HUDTextElement", {
        hudTextElement: function(x, y, text) {
            this.requires("2D, DOM, Text")
                .attr({x: x, y: y, w: 100})
                .text(text)
                .textColor("#ffffff", 1)
                .textFont({
                    size: '14px'
                })
            
            this._element.parentNode.removeChild(this._element);
            Crafty.stage.elem.appendChild(this._element);
//            this.z = 1;
            
            return this;
        }
    });
});