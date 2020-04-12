define([], function () {

    let BaseCard = function(_name) {
        let name = _name;

        this.getName = function() {
            return name;
        };
    };

    BaseCard.prototype.doSomething = function() {
        console.log("Doing something...");
    };



    /**
     * Export for Nodejs
     */
    if (typeof exports !== 'undefined') {
        exports.BaseCard = BaseCard;
    }

    return BaseCard;
});