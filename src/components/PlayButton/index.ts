import * as PIXI from 'pixi.js';
import { ConfigInterface } from '../../config/contract';
import Button from '../UI/Button';

import playButtonActive from './assets/Bet.png';
import playButtonInactive from './assets/Bet.png';
import playButtonDisabled from './assets/Bet.png';

class PlayButton extends Button {
  constructor(config: ConfigInterface) {
    super({
      activeTexture: PIXI.Texture.from('playButtonActive'),
      inactiveTexture: PIXI.Texture.from('playButtonInactive'),
      disabledTexture: PIXI.Texture.from('playButtonDisabled')
    });
    this.position.set(config.playButtonPosition.x, config.playButtonPosition.y);
  }
}

PIXI.Loader.shared.add('playButtonActive', playButtonActive);
PIXI.Loader.shared.add('playButtonInactive', playButtonInactive);
PIXI.Loader.shared.add('playButtonDisabled', playButtonDisabled);

export default PlayButton;
