define([], function () {

    var BaseCard = {

        setName: function(name) {
            this.name = name;
        },

        BCtest: function() {
            console.log("BCtest---" + this.name);
        }

    };




    return(BaseCard);
});