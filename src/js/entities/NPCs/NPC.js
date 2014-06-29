game.NPC = me.ObjectEntity.extend({
	"init": function(x, y, settings) {

	console.log("NPC init called"); // called

	this.parent(x, y, settings);

	this.type = "NPC"

	this.collidable = true;

	// Set the font for the NPC (Can be custom or HTML build in font (see browser compatible fonts)
  //this.font = new me.BitmapFont("32x32_font", 32);
  this.font = new me.Font("Arial", 15, "white");

  },

  update: function(dt) {

    var res = me.game.world.collide(this);

    if(res){
      console.log("Collision!");
    }

  },

  onCollision: function(res, obj){

  	if (obj.type === 'player'){
  		// Do something?
  	}

  },

  draw: function(context){
  	this.parent(context);

  	this.font.draw(context, "Hello their!", this.pos.x, this.pos.y - 50);

  	this.font.draw(context, "Wub wub wub...", this.pos.x, this.pos.y - 25);
  }
});