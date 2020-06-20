// add removeAllChildren to the Node object.
Node.prototype.removeAllChildren = function() {
    while (this.FirstChild) {
        this.removeChild(this.FirstChild);
    } 
};