/**
 * Just for simplicity and demonstration purposes, no specific JavaScript framework or state management library has
 * been used.
 */

import * as PIXI from 'pixi.js';
import { config } from './config';
import PlayButton from './components/PlayButton';
import SelectPlayMode from './components/SelectPlayMode';
import Reels from './components/Reels';

import './style.css';
import Logo from "./components/Logo";

const { gameWidth, gameHeight } = config;

function createApplication(): PIXI.Application {
  const app = new PIXI.Application({
    backgroundColor: 0x13152c,
    width: gameWidth,
    height: gameHeight
  });
  app.renderer.resize(window.innerWidth * 2 / 3, window.innerHeight * 2 / 3);
  app.stage.scale.x = window.innerWidth * 2 / 3 / gameWidth;
  app.stage.scale.y = window.innerHeight * 2 / 3 / gameHeight;

  window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    app.stage.scale.x = window.innerWidth / gameWidth;
    app.stage.scale.y = window.innerHeight / gameHeight;
  });
  return app;
}

function loadAssets(onComplete: () => void): void {
  const loader = PIXI.Loader.shared;
  loader.onComplete.once(onComplete);
  loader.load();
}

function render(app: PIXI.Application) {
  document.body.appendChild(app.view);
}

window.onload = () =>
  loadAssets(() => {
    const app = createApplication();
    const stage = app.stage;

    const button = new PlayButton(config);
    stage.addChild(button);

    const select = new SelectPlayMode(config);
    stage.addChild(select);

    const reels = new Reels(config, app.ticker);
    stage.addChild(reels);

    const fpsDisplay = new Logo(config);
    stage.addChild(fpsDisplay);

    button.on('click', function (this: PlayButton) {
      if (!reels.areSpinning()) {
        this.setDisabled();
        reels.spin(() => {
          this.setInactive();
        });
      }
    });

    select.on('click', function (this: SelectPlayMode) {
      reels.setEasyMode(this.isOn());
    });

    render(app);
  });
