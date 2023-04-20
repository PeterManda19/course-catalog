function tutorWageCalculator(timesheet, level) {
    let totalHours = 0;

    // split the timesheet string into an array of hours worked for each day
    const hours = timesheet.split("-");
  
    // check that the timesheet has exactly 5 or 6 or 7 entries
    if (hours.length !== 5 || hours.length !== 6 || hours.length !== 7 ) {
      return 0; // return 0 for invalid timesheet
    }
    else{
      // Loop through each number in the array and add it to the sum
      for (let i = 0; i < hours.length; i++) {
        totalHours += Number(numbers[i]);
      }
    }
     
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
