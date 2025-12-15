let pattern = [];
let playerStep = 0;
let score = 0;
let playing = false;

function startGame() {
  pattern = [];
  playerStep = 0;
  score = 0;
  playing = true;
  nextRound();
}

function nextRound() {
  const botChoice = Math.random() < 0.5 ? 'L' : 'R';
  pattern.push(botChoice);
  playerStep = 0;
  document.getElementById("status").innerText =
    `บอทคิดทาง ${pattern.length} ขั้นแล้ว`;
}

function choose(choice) {
  if (!playing) return;

  if (choice === pattern[playerStep]) {
    playerStep++;
    score++;

    if (playerStep === pattern.length) {
      setTimeout(nextRound, 500);
    }
  } else {
    endGame();
  }
}

function endGame() {
  playing = false;
  const percent = Math.min(100, Math.floor(score * 5));

  let level = "สมองยังงัวเงีย 😴";
  if (percent >= 40) level = "เริ่มตื่นตัว 🙂";
  if (percent >= 70) level = "สมองไว ⚡";
  if (percent >= 90) level = "อัจฉริยะ 👑";

  document.getElementById("status").innerText = "เกมจบแล้ว";
  document.getElementById("result").innerHTML =
    `คะแนนความตื่นตัว: <b>${percent}%</b><br>${level}`;
}
