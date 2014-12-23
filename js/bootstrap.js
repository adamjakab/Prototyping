/**
 * Main background application
 */
console.time("BOOTSTRAP");
requirejs.config({
    baseUrl: 'js',
    paths: {
        augment: '../bower_components/augment/augment',
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