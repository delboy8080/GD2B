import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import Physics from "../engine/physics.js";
import Input from "../engine/input.js";

class Player extends GameObject
{
    constructor(x, y, img)
    {
        super(x,y);
        this.renderer = new Renderer('blue', 35,50, img);
        this.addComponent(this.renderer);
        this.addComponent(new Physics({x:0, y:0}, {x:0, y:0}));
        this.addComponent(new Input());
        
        this.speed = 100;
        this.direction=-1;
        
        this.isOnPlatform = false;
        this.isJumping = false;
        this.jumpForce = 300;
        this.jumpTime = 1;
        this.jumpTimer = 0;
    }
    
    update(deltaTime)
    {
        const physics = this.getComponent(Physics);
        const input = this.getComponent(Input);
        
        if(input.isKeyDown('ArrowLeft')||input.isKeyDown('KeyA'))
        {
            physics.velocity.x = -this.speed;
            this.direction=1;
        }
        else if(input.isKeyDown('ArrowRight')||input.isKeyDown('KeyD'))
        {
            physics.velocity.x = this.speed;
            this.direction=-1;
        }
        else
        {
            physics.velocity.x = 0;
        }
        if(input.isKeyDown('Space') && this.isOnPlatform)
        {
            this.startJump();
        }
        if(this.isJumping)
        {
            this.updateJump(deltaTime);
        }
        let platforms = this.game.gameObjects.filter((obj) => obj.tag == 'platform');
        for(const p of platforms)
        {
            if(physics.isColliding(p.getComponent(Physics)))
            {
                if(this.isJumping==false)
                {
                    physics.velocity.y = 0;
                    physics.acceleration.y = 0;
                    this.y = p.y - this.renderer.height;
                    this.isOnPlatform = true;
                }
            }
        }
        super.update(deltaTime);
    }
    
    startJump()
    {
        if(this.isOnPlatform)
        {
            this.isJumping = true;
            this.jumpTimer = this.jumpTime;
            this.getComponent(Physics).velocity.y = -this.jumpForce;
            this.isOnPlatform = false;
        }
    }
    updateJump(deltaTime)
    {
        const physics = this.getComponent(Physics);
        this.jumpTimer -= deltaTime;
        if(this.jumpTimer <0 || physics.velocity.y >=0)
        {
            this.isJumping = false;
        }
    }
}

export default Player