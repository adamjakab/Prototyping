define(['underscore', 'OptionsManager', 'BaseCard', 'PassCard'], function (_, OptionsManager, BaseCard, PassCard) {
    return {
        boot: function() {
            console.log("booting...");


            var config = new OptionsManager({
                name:       "adam",
                age:        20,
                work:       "ITC",
                interests: ["js","php"],
                projects: {
                    PPM: {
                        name:   "Paranoia Password Manager",
                        status: "Beta"
                    },
                    MekitCrm: {
                        name: "Mekit Crm App",
                        status: "Beta"
                    }
                }
            });

            console.log(config.getAll());
            console.log("Project name: " + config.get("projects.PPM.name","BOH?"));
            console.log("Something undefined: " + config.get("projects.PPM.type","BOH?"));

            config.merge({type:"Php"}, "projects.PPM");
            console.log(config.getAll());

            config.merge({xxx:"yyy"});
            console.log(config.getAll());

            //config.set("name", "Adam").set("age", 40);
            //config.set("a1",false);
            //console.log(config.getAll());



            /*
            var E = new PassCard("Adam", "ETC");
            console.log(E.getName());
            console.log(E.getGroup());
            E.test3();

            var EE = new PassCard("Vito", "CEO");
            console.log(EE.getName());
            console.log(EE.getGroup());
            EE.test3();
            EE.doSomething();
            */


        }
    };
});