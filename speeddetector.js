function checkSpeed(speed) {
   const speedLimit = 70;
   const kmPerDemeritPoints = 5;
   const aquiredPointsLimit = 12;

   if (speed <= speedLimit) {
       console.log("Ok");
   } else {
       const points = Math.floor((speed - speedLimit) / kmPerDemeritPoints);
       if (points > aquiredPointsLimit) {
           console.log("License suspended");
       } else {
           console.log("Points: " + points);
       }
   }
}

//to  test the function and ensure its working  
checkSpeed(70); // Output is: Points: ok
checkSpeed(80); // Output is: Points: 2
checkSpeed(90); // Output is: Points: 4
checkSpeed(150); // Output is: Points: License suspended
