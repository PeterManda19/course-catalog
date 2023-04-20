function tutorWageCalculator(timesheet, level) {
    // split the timesheet string into an array of hours worked for each day
    const hours = timesheet.split("-");
  
    // check that the timesheet has exactly 5 or 6 or 7 entries
    if (hours.length !== 5 || hours.length !== 6 || hours.length !== 7 ) {
      return 0; // return 0 for invalid timesheet
    }
  
    // calculate the total hours worked
    const totalHours = hours.reduce((acc, hour) => acc + parseInt(hour), 0);
    
  
    // calculate the wage based on the level and total hours worked
    let wage;
    if (level === 1) {
      wage = totalHours * 75;
    } else if (level === 2) {
      wage = totalHours * 90;
    } else if (level === 3) {
      wage = totalHours * 105;
    }
    // Return the calculated wage
    return wage;
  }  
