define(['ConfigurationManager'], function (ConfigurationManager) {
    return {
        boot: function() {
            console.log("booting...");


            var config = new ConfigurationManager({
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
            config.test();


            console.log(config.getAll());
            console.log("Project name: " + config.get("projects.PPM.name","BOH?"));
            console.log("Something undefined: " + config.get("projects.PPM.type","BOH?"));

            config.merge({type:"Php"}, "projects.PPM");
            console.log(config.getAll());

            config.merge({xxx:"yyy"});
            console.log(config.getAll());




        }
    };
});