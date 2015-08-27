var chai = require("chai");
var expect = chai.expect();
//var assert = chai.assert();
var smallworld = require("../js/smallworld");

describe("Smallworld", function () {
    describe("Animation suite", function () {
        it("animate the smallworld", function () {
            expect(smallworld.world.toString()).to.equal("");
            smallworld.world.turn();
            expect(smallworld.world.toString()).to.not.equal("");
        });
    });
});