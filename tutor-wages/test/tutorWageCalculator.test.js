
describe("The tutorWageCalculator function", function() {

    it("should be able to calculate the wage for a level 1 tutor", function(){
        
        assert.equal(1875, tutorWageCalculator("4-4-4-8-5", 1)) // 
        assert.equal(1425, tutorWageCalculator("3-7-2-3-4", 1)) // 

    });
    
    it("should be able to calculate the wage for a level 2 tutor", function(){

        assert.equal(2250, tutorWageCalculator("4-4-4-8-5", 2)) //
        assert.equal(1710, tutorWageCalculator("3-7-2-3-4", 2)) //

    });
    
    it("should be able to calculate the wage for a level 3 tutor", function(){
        assert.equal(2625, tutorWageCalculator("4-4-4-8-5", 3)) // 
        assert.equal(1995, tutorWageCalculator("3-7-2-3-4", 3)) // 
    });

    it("should be able to handle invalid timesheet string and return 0", function(){

        // invalid
        assert.equal(0, tutorWageCalculator("4-8-5", 1)) //
        // invalid
        assert.equal(0, tutorWageCalculator("4-8-5-4-8-5-9-1", 1)) //

    });

})
