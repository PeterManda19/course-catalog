import { expect } from 'chai';


describe('courseCost', () => {
    /*unit tests that: * Ensures that courses get different prices across discount windows*/
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
  
    /*unit test that: * Ensures that invalid course codes are handled correctly*/
    it('should return an error for invalid course codes', () => {
      const result = courseCost('x1', '2023-04-22');
      expect(result.status).to.equal('Invalid code');
    });
  
    /*unit test that: * Ensures that invalid dates returns a status of: Invalid day*/
    it('should return an error for invalid start dates', () => {
      const result = courseCost('p1', '2023-04-31');
      expect(result.status).to.equal('Invalid day');
    });

    /*unit test that: * Ensures different courses has different prices*/
    it('should ensure different courses have different prices', () => {
      const result1 = courseCost('p1', '2023-04-22');
      const result2 = courseCost('p2', '2023-04-22');
      const result3 = courseCost('r1', '2023-04-22');
    
      expect(result1.amountDue).to.not.equal(result2.amountDue);
      expect(result1.amountDue).to.not.equal(result3.amountDue);
      expect(result2.amountDue).to.not.equal(result3.amountDue);
    });
  });
  