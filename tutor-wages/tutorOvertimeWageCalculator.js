function tutorOvertimeWageCalculator(timesheet, level) {
    const overtimeRate = 1.5; // The overtime rate is 1.5 times the regular rate
    const hourlyRates = [22.5, 27, 31.5]; // The hourly rates for tutor levels 1, 2, and 3 respectively
  
    // Calculate the total hours worked
    const totalHours = timesheet.split('-').reduce((acc, curr) => acc + parseInt(curr), 0);
  
    // Calculate the regular hours worked based on the tutor level
    const regularHours = level * 5;
  
    // Calculate the overtime hours worked
    const overtimeHours = totalHours - regularHours;
  
    // Calculate the regular wage
    const regularWage = hourlyRates[level - 1] * regularHours;
  
    // Calculate the overtime wage
    const overtimeWage = hourlyRates[level - 1] * overtimeRate * overtimeHours;
  
    // Calculate the total wage
    const totalWage = regularWage + overtimeWage;
  
    // Return the total wage, rounded to two decimal places
    return parseFloat(totalWage.toFixed(2));
  }
  