var preload = function(game){}

preload.prototype = {
    preload: function(){
        var loadingBar = this.add.sprite(160, 240, "loading");
        loadingBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(loadingBar);
        
        this.game.load.image('player', 'assets/player.PNG');
        this.game.load.image('wall', 'assets/wall.PNG');
        this.game.load.image('coin', 'assets/coin.PNG');
        this.game.load.image('enemy', 'assets/lava.PNG');
        this.game.load.image('gameTitle', 'assets/gameTitle.png');
        this.game.load.image('play', 'assets/play.png');
        this.game.load.image('gameover', 'assets/gameover.png');
    },
    create: function(){
        this.game.state.start("GameTitle");
    }
}







