describe('courseCost', () => {
    it('should return a discount of 40% for courses starting between the 20th and 25th', () => {
      const result = courseCost('p1', '2023-04-22');
      expect(result.amountDue).to.equal(4710);
    });
  
    it('should return a discount of 20% for courses starting between the 10th and 15th', () => {
      const result = courseCost('p2', '2023-04-12');
      expect(result.amountDue).to.equal(7192);
    });
  
    it('should return the original price for courses starting outside discount windows', () => {
      const result = courseCost('r1', '2023-04-30');
      expect(result.amountDue).to.equal(5675);
    });
  
    it('should return an error for invalid course codes', () => {
      const result = courseCost('x1', '2023-04-22');
      expect(result.status).to.equal('Invalid code');
    });
  
    it('should return an error for invalid start dates', () => {
      const result = courseCost('p1', '2023-04-31');
      expect(result.status).to.equal('Invalid day');
    });
  });
  