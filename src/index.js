import Boot from './states/Boot';
import Preload from './states/Preload';
import Cutscene from './states/Cutscene';
import Enterence from './states/Enterence';

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);

		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Cutscene', Cutscene, false);
		this.state.add('Enterence', Enterence, false);

		this.state.start('Boot');
	}

}

new Game();
