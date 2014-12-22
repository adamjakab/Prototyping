define(['BaseCard', 'PassCard'], function (BaseCard, PassCard) {
    return {
        boot: function() {
            console.log("booting...");

            /*
            var PC1 = new PassCard("Pass Card 1", "my secret 123");
            var PC2 = new PassCard("Pass Card 2", "my secret 999");
            console.log(PC1 + " : " + PC1.getSecret());
            console.log(PC2 + " : " + PC2.getSecret());
            PC1.test();
            PC2.test();
            */

            //Classes
            function A() {
                B.call(this);
            }

            function B() {
                console.log("INITING B!");
                this.test = function() {
                    console.log("i was inherited from b!");
                }
            }

            A.prototype = Object.create(B.prototype);//new B();
            A.prototype.constructor = A;



            var a = new A();
            a.test();

            console.log(A.isPrototypeOf(a));
            console.log(B.isPrototypeOf(a));
        }
    };
});