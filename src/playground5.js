// setTimeout, setInterval and clearInterval Functions

// Will run once in 1 second
// setTimeout(() => {
//   console.log('Hello in 1 second');
// }, 1000);

// Will run every 2 seconds
const interval = setInterval(() => {
  console.log('Hello');
}, 2000);

// Will stop the setInterval from running
clearInterval(interval);
