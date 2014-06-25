game.FirePot = me.ObjectEntity.extend({
	"init": function(x, y, settings) {

  	console.log("FirePot init called"); // called

  	this.parent(x, y, settings);

  	this.type = "FirePot"

  	// LET'S CREATE SOME FIRE!
    var x = me.game.viewport.getWidth() / 2;
    var y = me.game.viewport.getHeight() / 2;
    var image = me.loader.getImage('explosion');
    this.emitter = new me.ParticleEmitter(x, y, {
        image: image,
        width: 31,
        height: 5,
        totalParticles: 82,
        angle: 1.5975756378146624,
        angleVariation: 0.3490658503988659,
        speed: 3.734672378907925,
        frequency: 50
    });
    this.emitter.name = 'fire';
    this.emitter.z = 11;
    me.game.world.addChild(this.emitter);
    me.game.world.addChild(this.emitter.container);
    this.emitter.streamParticles();

    console.log("Allegedly streaming particles");

  },

  onCollision: function(res, obj){

  	if (obj.type === 'player'){
  		console.log("Ello Mr. Player, you just collided with a FirePot!");

      this.emitter.streamParticles();
  	}

  },

  joeFoundACollision: function(){
  	console.log("Hello there, it appears that duck I was talking about was called Joe. He found a collision and told NPC.js via this function!")
  }
});