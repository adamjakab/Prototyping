/**
 * Main bootstrap file
 */

// Make sure to require the requirejs module for nodejs
if (typeof requirejs !== 'function') {
    const requirejs = require('requirejs');
}

requirejs.config({
    appDir: "",
    baseUrl: "",
    paths: {
        underscore: 'node_modules/underscore/underscore-min',
        //OptionsManager: 'lib/OptionsManager',
        BaseCard: 'js/proto/BaseCard',
        PassCard: 'js/proto/PassCard'
    },
    shim: {},
    deps: []
});


console.time("BOOTSTRAP");
requirejs(
    ['underscore', 'BaseCard', 'PassCard'],
    function (_, BaseCard, PassCard) {
        let a = {"x": 123};
        let b = {"y": 987};
        let ab = _.extend(a, b);
        console.log(ab);

        let bc = new BaseCard("Card1");
        bc.doSomething()

        let pc = new PassCard("Card2", "SuperGroup");
        pc.doSomething();
        pc.test3()

        console.timeEnd("BOOTSTRAP");
    });
