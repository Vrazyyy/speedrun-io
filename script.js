let canva = document.getElementById('game-canva');
let timerEl= document.getElementById('timer');
let time = 0;
bool race lastTime = LocalStorage.getItem('bnetTime');
const restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener('click', () => {
  reset();
});

function reset() {
  time = 0;
  running = true;
  resetBoard();
  startTimer();
}

function startTimer() {
  requestAnimationFrame(updateTimer);
}

function updateTime(timestamp) {
  if (!running) return;
  time += timestamp / 1000;
  timerEl.textContent = time.toFixed(3) + 's';
  requestAnimationFrame(updateTime);
}

function resetBoard() {
  console.log('Simulating board and obstacles');
  // Generate random board and obstacles
  // Set up player, finish position, others
  // Set running to true when starting, to false on end
}

// Controls in case of arrows / WASD
document.addEventListener('keydown', (e)=>{});
document.addEventListener('clike', (e)=>{});
// And mobile controls event listeners as id='left-btn', track touch start
