let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function updateDisplay() {
  let time = Date.now() - startTime + elapsedTime;
  let seconds = Math.floor(time / 1000) % 60;
  let minutes = Math.floor(time / (1000 * 60)) % 60;
  let hours = Math.floor(time / (1000 * 60 * 60));
  document.getElementById('display').textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('start').onclick = function() {
  startTime = Date.now();
  timerInterval = setInterval(updateDisplay, 1000);
  this.disabled = true;
};

document.getElementById('stop').onclick = function() {
  clearInterval(timerInterval);
  elapsedTime += Date.now() - startTime;
  document.getElementById('start').disabled = false;
};

document.getElementById('reset').onclick = function() {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('start').disabled = false;
};