game.NPC = me.ObjectEntity.extend({
	"init": function(x, y, settings) {

	console.log("NPC init called"); // called

	this.parent(x, y, settings);

	this.type = "NPC"

	//this.collidable = true;
  },

  onCollision: function(res, obj){

  	//called
  	console.log("Object type is: " + obj.type);

  	if (obj.type === 'player'){
  		//not called
  		console.log("Ello Mr. Player, I sent a trained duck out to greet you!");
  	}

  },

  joeFoundACollision: function(){
  	console.log("Hello there, it appears that duck I was talking about was called Joe. He found a collision and told NPC.js via this function!")
  }
});