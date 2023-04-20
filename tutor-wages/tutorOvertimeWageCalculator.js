function tutorOvertimeWageCalculator(timesheet, level) {
    const hourlyRate = 25 * level; // calculate hourly rate based on tutor level
    const hoursPerWeek = timesheet.split("-").reduce((total, hours) => Number(total) + Number(hours)); // calculate total hours worked per week
  
    let baseWage = 0;
    let overtimeWage = 0;
  
    // calculate base wage and overtime wage based on hours worked
    if (hoursPerWeek <= 40) {
      baseWage = hoursPerWeek * hourlyRate;
    } else if (hoursPerWeek > 40) {
      baseWage = 40 * hourlyRate; // calculate base wage for first 40 hours
      overtimeWage = (hoursPerWeek - 40) * (hourlyRate * 1.5); // calculate overtime wage for hours over 40
    }
  
    return baseWage + overtimeWage; // return total wage
  }
  
 