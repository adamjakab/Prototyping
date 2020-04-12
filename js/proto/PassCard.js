define(['BaseCard'], function (BaseCard) {
    /**
     *
     * Using Parasitic Inheritance
     *
     * @param _name
     * @param _group
     * @returns {BaseCard}
     * @constructor
     */
    let PassCard = function(_name, _group) {
        let HOST = new BaseCard(_name);
        let group = _group;
        //

        //local/private methods
        let test2 = function() {
            console.log("Test2-"+HOST.getName());
        };

        //injecting method into HOST
        HOST.getGroup = function() {
            return group;
        };

        HOST.test3 = function() {
            console.log("Test3-"+HOST.getName());
            test2();
        };

        //
        return HOST;
    };


    /**
     * Export for Nodejs
     */
    if (typeof exports !== 'undefined') {
        exports.PassCard = PassCard;
    }

    return PassCard;
});