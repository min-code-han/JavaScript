'use strict';

import PopUp from './popup.js';
import Gamebuilder from './game.js';

const gameFinishBanner = new PopUp();

const game = new Gamebuilder()
  .withGameDuration(5)
  .withCarrotCount(3)
  .withBugCount(3)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case 'cancel':
      message = 'REPLAY ❓';
      break;
    case 'win':
      message = 'YOU WON 🎉?';
      break;
    case 'lose':
      message = 'YOU LOST 💩';
      break;
    default:
      throw new Error('not a valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
