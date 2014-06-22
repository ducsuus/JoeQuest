game.JoeDoor = me.LevelEntity.extend({
	"init": function(x, y, settings) {

	console.log("joeDoor init called"); // called

	this.parent(x, y, settings);

	//this.collidable = true;
  },


	"onCollision": function(res, obj) {

		console.log("COLLISION!"); // never called

		game.playScreen.endLevel();
	}
});