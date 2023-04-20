function tutorOvertimeWageCalculator(timesheet, level) {
  let totalHours = 0;
  let overtimeHours = 0;
  let overtimeRate = 0;

  // split the timesheet string into an array of hours worked for each day
  const hours = timesheet.split("-");

  // check that the timesheet has exactly 5 or 6 or 7 entries
  if (hours.length !== 5 && hours.length !== 6 && hours.length !== 7 ) {
    return 0; // return 0 for invalid timesheet
  }
  else{
    // Loop through each number in the array and add it to totalHours
    for (let i = 0; i < hours.length; i++) {
      totalHours += Number(hours[i]);
    }
  }

  // calculate overtime hours
  if(totalHours > 40){
    overtimeHours = totalHours - 40;
  }
   
  // calculate the overtime wage based on the level, overtime hours worked, and overtime rate
  let overtimeWage = 0;
  let hourlyRate = 0;
  if (level === 1) {
    hourlyRate = 75;
    overtimeRate = 0.07; // 7% overtime rate for level 1
  } else if (level === 2) {
    hourlyRate = 90;
    overtimeRate = 0.09; // 9% overtime rate for level 2
  } else if (level === 3) {
    hourlyRate = 105;
    overtimeRate = 0.12; // 12% overtime rate for level 3
  }
  if (overtimeHours > 0) {
    overtimeWage = overtimeHours * (hourlyRate * (1 + overtimeRate)); // calculate overtime wage
  }

  // Return the calculated total overtime wage based on extra hours worked
  return overtimeWage;
}
