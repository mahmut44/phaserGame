var gameOver = function(game){}

gameOver.prototype = {
	init: function(score){
		console.log("You scored: "+score)
	},
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(300,160,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(300,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
        //bricolage pour surcharger le restart :
        this.game.state.remove("TrollSport");
        this.game.state.add("TrollSport",trollSport);
		this.game.state.start("TrollSport");
	}
}