const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter number of seconds to count down: ", (input) => {
  let timeLeft = parseInt(input, 10);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }
  console.log(`Countdown starting from ${timeLeft} seconds...`);
  console.log(`Press "s" at any time to stop.`);
  process.stdin.setRawMode(true);
  let countdownInterval;
  let stopRequested = false;
  function checkForStopKey() {
    setTimeout(() => {
      process.stdin.once("data", (key) => {
        if (key.toString().trim().toLowerCase() === "s") {
          stopRequested = true;
          clearInterval(countdownInterval);
          console.log("\nCountdown Stopped by User.");
          rl.close();
        } else {
          checkForStopKey();
        }
      });
    }, 200); 
  }
  checkForStopKey();
  countdownInterval = setInterval(() => {
    if (stopRequested) return;
    console.log(`Time left: ${timeLeft}s`);
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);
});
