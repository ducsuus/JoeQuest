game.MrFridge = me.ObjectEntity.extend({
	"init": function(x, y, settings) {

	console.log("MrFridge init called"); // called

	this.parent(x, y, settings);

	//this.collidable = true;
	},

	"update": function(dt){

		/*var res = me.game.world.collide(this);


		if(res){
			console.log("LOOOOG");
		}*/
	},


	"onCollision": function(res, obj) {

		console.log("MrFridge COLLISION!"); // never called

		game.playScreen.endLevel();
	}
});