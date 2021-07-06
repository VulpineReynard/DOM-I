const siteStuff = {
  digits: {
    msDigit: 0,
    tenthDigit: 0,
    seconds: 0,
    tenthSecond: 0,
  },
  styles: {
    buttonStyle: function() {
      this.style.border = '2px solid blue';
      this.style.padding = ' 5px';
      this.style.boxShadow = '0 2px 2px 0';
    }
  }
}

startButton = document.createElement('button');
startButton.textContent = "Start";
document.querySelector('body').appendChild(startButton);
startButton.style.border = '2px solid blue';
startButton.style.padding = '10px';
startButton.style.boxShadow = '0 2px 2px 0';
startButton.style.borderRadius = '8px';
startButton.addEventListener("click", startTimer);

stopButton = document.createElement('button');
stopButton.textContent = "Stop";
document.querySelector('body').appendChild(stopButton);
stopButton.style.border = '2px solid blue';
stopButton.style.padding = '10px';
stopButton.style.boxShadow = '0 2px 2px 0';
stopButton.style.borderRadius = '8px';
stopButton.addEventListener("click", stopTimer);

let milliseconds = document.querySelector('#msTens');
milliseconds.textContent = siteStuff.digits.msDigit;
console.log(milliseconds);

let tenthSeconds = document.querySelector('#msHundreds');
tenthSeconds.textContent = siteStuff.digits.tenthDigit;
console.log(tenthSeconds);

let seconds = document.querySelector('#secondOnes');
seconds.textContent = siteStuff.digits.seconds;
console.log(seconds);

let tenthSecond = document.querySelector('#secondTens');
tenthSecond.textContent = siteStuff.digits.tenthSecond;
console.log(tenthSecond);
console.log(startButton);

const milliCounter = setInterval(milliCounterFunc, 10);
function milliCounterFunc() {
  if(siteStuff.digits.msDigit <= 8){
    siteStuff.digits.msDigit++;
  } else {
    siteStuff.digits.msDigit = 0;
  }
  milliseconds.textContent = siteStuff.digits.msDigit;
}

const tenthsCounter = setInterval(tenthsCounterFunc, 100);
function tenthsCounterFunc() {
  if(siteStuff.digits.tenthDigit <= 8){
    siteStuff.digits.tenthDigit++;
  } else {
    siteStuff.digits.tenthDigit = 0;
  }
  tenthSeconds.textContent = siteStuff.digits.tenthDigit;
}

const secondCounter = setInterval(secondCounterFunc, 1000);
function secondCounterFunc() {
  if(siteStuff.digits.seconds <= 8){
    siteStuff.digits.seconds++;
  } else {
    siteStuff.digits.seconds = 0;
  }
  seconds.textContent = siteStuff.digits.seconds;
}

function stopTimer() {
  clearInterval(milliCounter);
  clearInterval(tenthsCounter);
  clearInterval(secondCounter);
  milliseconds.textContent = 0;
  tenthSeconds.textContent = 0;
  seconds.textContent = 0;
}

function startTimer() {
  setInterval(milliCounter, 10);
  setInterval(tenthsCounter, 100);
  setInterval(secondCounter, 1000);
}