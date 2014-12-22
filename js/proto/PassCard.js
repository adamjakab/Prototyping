define(['BaseCard'], function (BaseCard) {


    function PassCard(name, _secret) {
        this.name = name;
        var secret = _secret;
        this.setName(this.name);


        this.getSecret = function() {
            return secret;
        };



    }

    //PassCard.prototype = new BaseCard();
    //PassCard.prototype.parent = BaseCard.prototype;
    //PassCard.prototype.constructor = PassCard;

    PassCard.prototype = BaseCard;
    PassCard.prototype.parent = BaseCard;
    PassCard.prototype.constructor = PassCard;


    PassCard.prototype.toString = function() {
        return '[PassCard "'+this.name+']';
    };

    //PassCard.prototype.getSecret = function() {
    //    return secret;
    //};

    PassCard.prototype.test = function() {
        console.log("Test");
        this.BCtest();
    };

    return(PassCard);
});