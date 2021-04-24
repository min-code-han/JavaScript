'use strict';

// 공통적으로 사용되어 지기 때문에 굳이 Class로 만들지 않음.
const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const winSound = new Audio('./sound/game_win.mp3');

//사용자가 어떤 Sound를 재생해야 하는지 일일이 인자로 받지 않아도 되도록 유용한
//함수 만들기 :-)
export function playCarrot() {
  playSound(carrotSound);
}

export function playBug() {
  playSound(bugSound);
}

export function playAlert() {
  playSound(alertSound);
}

export function playWin() {
  playSound(winSound);
}

export function playBackbround() {
  playSound(bgSound);
}

export function stopBackbround() {
  stopSound(bgSound);
}

// ---------------------------------------
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
