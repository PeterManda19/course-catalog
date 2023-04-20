
describe("The tutorOvertimeWageCalculator function", function () {

    it("should be able to calculate the overtime for a level 1 tutor", function () {
        assert.equal(1123.5, tutorOvertimeWageCalculator("8-8-8-8-8-9-5", 1)) //
        assert.equal(1364.25, tutorOvertimeWageCalculator("8-8-8-10-8-8-7", 1)) //
    });

    it("should be able to calculate the overtime for a level 2 tutor", function () {
        assert.equal(1373.4, tutorOvertimeWageCalculator("8-8-8-8-8-9-5", 2)) //
        assert.equal(1667.7, tutorOvertimeWageCalculator("8-8-8-10-8-8-7", 2)) //
    });

    it("should be able to calculate the overtime for a level 3 tutor", function () {
        assert.equal(1646.4, tutorOvertimeWageCalculator("8-8-8-8-8-9-5", 3)) //
        assert.equal(1881.60, tutorOvertimeWageCalculator("8-8-8-10-8-7-7", 3).toFixed(2)) //
    });

})
