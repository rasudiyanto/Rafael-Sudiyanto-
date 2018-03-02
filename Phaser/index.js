var mainState = {
    preload:function(){
        this.game.load.image('coin','assets/coin.png');
         this.game.load.image('enemy','assets/lava.png');
         this.game.load.image('player','assets/player.png');
         this.game.load.image('wall','assets/wall.png');
    },
    
    create:function(){
        this.game.stage.backgroundColor = '#5598DB'
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.enableBody = true;
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        this.player = this.game.add.sprite(70,100,'player');
    },
    
    update:function(){
        if(this.cursor.left.isDown){
            this.player.body.velocity.x = -200;
        }
        else if 
            (this.cursor.right.isDown){
                this.player.body.velocity.x = 200;
            }
        else{
            this.player.body.velocity.x = 0;
        }
    }
}