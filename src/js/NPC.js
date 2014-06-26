game.NPC = me.ObjectEntity.extend({
	"init": function(x, y, settings) {

	console.log("NPC init called"); // called

	this.parent(x, y, settings);

	this.type = "NPC"

	this.collidable = true;
  },

  onCollision: function(res, obj){

  	if (obj.type === 'player'){
  		// Do something?
  	}

  }
});