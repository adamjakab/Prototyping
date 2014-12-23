define([], function () {

    var BaseCard = function(_name) {
        var name = _name;
        this.getName = function() {
            return name;
        };
    };

    BaseCard.prototype.doSomething = function() {
        console.log("Doing something...");
    };




    return(BaseCard);
});