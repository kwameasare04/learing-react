/* 

A new virus (COVID-29) is spreading in the UK.

Anyone who catches the virus becomes immediately contagious and therefore able to spread it to others. HJowever, 
Each person who contracts the virus makes a full recovery in one week, after which time are no longer contagious.

On Monday 1st March it is known that N people were infected over the course of the previous week. 

The government issues a 'lockdown' order that will stay in place until the first Monday on which the number of infections during the 
previous week falls beneath the target threshold, T. 

During the Lockdown the number of people to whom an infected person spreads the disease within a week is R, the rate of transmission.



The requirements of a valid test are as follows:
R will be a float greater than 0 and less than 1.
N will be greater than T.



You must write a JavaScript function that determines the date on which the Lockdown will be lifted.
The function should take into account the number of people infected, the target threshold and the rate of transmission... or N, T and R... as its three inputs. 

The function should return a string in the format dd/mm/yyyy
If the requirements of a valid test aren't met, the function should return -1

*/
/// Start date 1 march 2021
/// N people infected within the week
/// target threshold T
/// rate of transmission R

function lockdownLift(N,T,R) {
    let startDate = new Date(2021,02,01);
    
    if(R < 0 || R > 1 || T >= N){
        return -1;
    }
    else {
    let noOfWeeks = 0;
    let previousN = N / R;
    
    let covidData = [N,T,R, noOfWeeks, previousN];
    
    while(previousN > T){
        
        N = (N - N) + (N * R) ;
        previousN = N / R;
        noOfWeeks++
       
    }

  
    let days = noOfWeeks * 7;

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }

    let lockEnd = addDays(startDate, days);  
    
    
    var d = lockEnd;
d.setDate(d.getDate() + (7-d.getDay())%7+1);
return d

//     var closestMonday = (date) => {
//     var curr_date = date; // current date
//    var day_info = 8.64e+7; // milliseconds per day
//         var days_to_monday = 8 - curr_date.getDay(); // days left to closest Monday
//         var monday_in_sec = curr_date.getTime() + days_to_monday * day_info; // aleary Monday in seconds from 1970 
//         var next_monday = new Date(monday_in_sec); // Monday in date object
//         next_monday.setHours(0,0,0);
//         return next_monday;

//     }
//     // return closestMonday(lockFree)
//     // //  let d = lockFree;
//     // //  d.setDate(d.getDate() + ((7 - d.getDay()) % 7 + 1) % 7);

//     // // return d
}

}
/* Tests */
lockdownLift(1000, 500, 0.5) // "15/03/2021"
lockdownLift(1000, 500, 0.75) // "22/03/2021"
lockdownLift(5000, 500, 0.75) // "03/05/2021"