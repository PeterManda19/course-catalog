function tutorWageCalculator(timesheet, level) {
    // split the timesheet string into an array of hours worked for each day
    const hours = timesheet.split("-");
  
    // check that the timesheet has exactly 5 entries
    if (hours.length !== 5) {
      return 0; // return 0 for invalid timesheet
    }
  
    // calculate the total hours worked
    const totalHours = hours.reduce((total, hour) => {
      // convert the hour string to a number and add it to the total
      return total + parseInt(hour);
    }, 0);
  
  }  
