import * as PIXI from 'pixi.js';
import { ConfigInterface } from '../../config/contract';
import Button from '../UI/Button';

import playButtonActive from './Logo.png';
import playButtonInactive from './Logo.png';
import playButtonDisabled from './Logo.png';

class Logo extends Button {
    constructor(config: ConfigInterface) {
        super({
            activeTexture: PIXI.Texture.from('logo1'),
            inactiveTexture: PIXI.Texture.from('logo2'),
            disabledTexture: PIXI.Texture.from('logo3')
        });
        this.position.set(config.FPSDisplayPosition.x - 100, config.FPSDisplayPosition.y);
    }
}

PIXI.Loader.shared.add('logo1', playButtonActive);
PIXI.Loader.shared.add('logo2', playButtonInactive);
PIXI.Loader.shared.add('logo3', playButtonDisabled);

export default Logo;
