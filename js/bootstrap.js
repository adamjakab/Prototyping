/**
 * Main background application
 */
console.time("BOOTSTRAP");
requirejs.config({
    baseUrl: 'js',
    paths: {
        underscore: '../bower_components/underscore/underscore-min',
        OptionsManager: 'lib/OptionsManager',
        BaseCard: 'proto/BaseCard',
        PassCard: 'proto/PassCard'
    },
    shim: {
    },
    deps: []
});

require(['main'], function(MAIN) {
    MAIN.boot();
    console.timeEnd("BOOTSTRAP");
});