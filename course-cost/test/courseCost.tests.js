describe('courseCost', () => {
    /*unit tests that: * Ensures that courses get different prices across discount windows*/
    it('should return a discount of 40% for courses starting between the 20th and 25th', () => {
      const result = courseCost('p1', '2023-04-22');
      assert.equal(result.amountDue, 4710);
    });
  
    it('should return a discount of 20% for courses starting between the 10th and 15th', () => {
      const result = courseCost('p2', '2023-04-12');
      eassert.equal(result.amountDue, 7192);
    });
  
    it('should return the original price for courses starting outside discount windows', () => {
      const result = courseCost('r1', '2023-04-30');
      assert.equal(result.amountDue, 5675);
    });
  
    /*unit test that: * Ensures that invalid course codes are handled correctly*/
    it('should return an error for invalid course codes', () => {
      const result = courseCost('x1', '2023-04-22');
      assert.equal(result.status, 'Invalid code');
    });
  
    /*unit test that: * Ensures that invalid dates returns a status of: Invalid day*/
    it('should return an error for invalid start dates', () => {
      const result = courseCost('p1', '2023-04-31');
      assert.equal(result.status, 'Invalid day');
    });

    /*unit test that: * Ensures different courses has different prices*/
    it('should ensure different courses have different prices', () => {
      const result1 = courseCost('p1', '2023-04-22');
      const result2 = courseCost('p2', '2023-04-22');
      const result3 = courseCost('r1', '2023-04-22');
    
      assert.notEqual(result1.amountDue, result2.amountDue);
      assert.notEqual(result1.amountDue, result3.amountDue);
      assert.notEqual(result2.amountDue, result3.amountDue);
    });
  });
  