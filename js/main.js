define(['BaseCard', 'PassCard'], function (BaseCard, PassCard) {
    return {
        boot: function() {
            console.log("booting...");



            var E = new PassCard("Adam", "ETC");
            console.log(E.getName());
            console.log(E.getGroup());
            E.test3();

            var EE = new PassCard("Vito", "CEO");
            console.log(EE.getName());
            console.log(EE.getGroup());
            EE.test3();




        }
    };
});