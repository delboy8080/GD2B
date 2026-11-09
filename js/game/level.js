import Game from "../engine/game.js"
import Confiner from "../engine/confiner.js"
import Player from "./player.js"
import Platform from "./platform.js"
import Enemy from "./enemy.js"
import Collectible from "./collectible.js"
import {Images} from "../engine/resources.js"

class Level extends Game
{
    constructor(canvas)
    {
        super(canvas);
          let canvasHeight = this.canvas.height;
      
        this.player = new Player(10, 60, Images.player);
        this.camera.target = this.player;
        this.camera.confiner= new Confiner(0, 0, 2000, canvasHeight);
        
        let platforms = [
            new Platform(0, canvasHeight-40, 500, 32, 'green', Images.tile),
            new Platform(600, canvasHeight-40, 200, 32, 'green', Images.tile),
            new Platform(0, canvasHeight-200, 300, 32, 'green', Images.tile),
        ];
        
        for(const p of platforms)
        {
            this.addGameObject(p);
        }
        
        let collectibles = [
            new Collectible(50, this.canvas.height-80, 30,30, 'yellow', Images.collectible),
            new Collectible(700, this.canvas.height-80, 30,30, 'yellow', Images.collectible)
            
            
        ];
        for(const c of collectibles)
        {
          
            this.addGameObject(c);
        }
        
        let enemies = [
            new Enemy(300, canvasHeight-90, 35, 50, 'red', Images.enemy),
            new Enemy(720, canvasHeight-90, 35, 50, 'red', Images.enemy),
            
            
        ];
         for(const e of enemies)
        {
          
            this.addGameObject(e);
        }
        this.addGameObject(this.player);
    }
}

export default Level