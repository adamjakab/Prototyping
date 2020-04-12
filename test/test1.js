// Make sure to require the requirejs module for nodejs
if (typeof requirejs !== 'function') {
    const requirejs = define = require('requirejs');

    requirejs.config({
        appDir: "",
        baseUrl: "",
        paths: {
            BaseCard: 'js/proto/BaseCard',
            PassCard: 'js/proto/PassCard'
        },
        shim: {},
        deps: []
    });
}

// Chai + Mocha
const { assert } = require('chai');
const Mocha = require("mocha");
const describe = Mocha.describe;
const it = Mocha.it;

// Modules to test
let BaseCardModule = require("../js/proto/BaseCard");
let PassCardModule = require("../js/proto/PassCard");


describe("BaseCard", function() {

    it("should return its name", function() {
        let card_name = "card-1"
        let bc = new BaseCardModule.BaseCard(card_name)
        assert.strictEqual(bc.getName(), card_name)
    });

});

describe("PassCard", function() {

    it("should return its name", function() {
        let card_name = "card-2"
        let pc = new PassCardModule.PassCard(card_name)
        assert.strictEqual(pc.getName(), card_name)
    });

    it("should return its group name", function() {
        let card_name = "card-2"
        let card_group = "group-X"
        let pc = new PassCardModule.PassCard(card_name, card_group)
        assert.strictEqual(pc.getGroup(), card_group)
    });

});
