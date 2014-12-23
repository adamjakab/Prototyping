define([], function () {

    var BaseCard = function(_name) {
        var name = _name;
        this.getName = function() {
            return name;
        };
    };




    return(BaseCard);
});