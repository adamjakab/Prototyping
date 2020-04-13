// Make sure to require the requirejs module for nodejs
if (typeof requirejs !== 'function') {
    const requirejs = define = require('requirejs');

    requirejs.config({
        appDir: "",
        baseUrl: "",
        paths: {},
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
PPMModel = require("../js/model/PPMModel");
PassCard = require("../js/model/PassCard");

describe("PassCard", function() {
    it("should return its name", function() {
        let card_name = "Jack"
        let pc = new PassCard.PassCard({
            name: card_name,
        });
        assert.strictEqual(pc.get("name"), card_name);
    });
    it("should return its identifier", function() {
        let card_identifier = 123456789
        let pc = new PassCard.PassCard({
            name: "Something",
            identifier: card_identifier
        });
        assert.strictEqual(pc.get("identifier"), card_identifier);
    });
    it("should not accept extra attribute", function() {
        let pc = new PassCard.PassCard({
            name: "card_name"
        });
        pc.set("bad_stuff", "BAADZ")
        pc.set("bad_stuff", "BAAD", {validate: true})
        pc.save()
    });
});

describe("PPMModel", function() {
    it("should return its name", function() {
        let card_name = "Jack"
        let m = new PPMModel.PPMModel({
            name: card_name
        });
        assert.strictEqual(m.get("name"), card_name)
    });
});

