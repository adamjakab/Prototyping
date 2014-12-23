define(['BaseCard'], function (BaseCard) {

    var PassCard = function(_name, _group) {
        var HOST = new BaseCard(_name);
        var group = _group;
        //
        //local/private methods
        var test2 = function() {
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

    return(PassCard);
});