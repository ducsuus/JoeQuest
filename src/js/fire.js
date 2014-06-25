game.FirePot = me.ObjectEntity.extend({
	"init": function(x, y, settings) {

  	console.log("FirePot init called"); // called

  	this.parent(x, y, settings);

  	this.type = "FirePot"

  	// LET'S CREATE SOME FIRE!
    var image = me.loader.getImage('particle_explosion');
    console.log("particle_explosion is " + image);
    this.emitter = new me.ParticleEmitter(x, y, {
      image: image,
      width: 100,
      totalParticles: 300,
      angle: 1.1207997469048476,
      angleVariation: 3.141592653589793,
      speed: 8.736386234848165,
      speedVariation: 0,
      gravity: -0.32,
      wind: -0.02,
      frequency: 50
    });
    this.emitter.name = 'fire';
    this.emitter.z = 4;
    me.game.world.addChild(this.emitter);
    me.game.world.addChild(this.emitter.container);
    this.emitter.streamParticles();

    console.log("Allegedly streaming particles");

  },

  onCollision: function(res, obj){

  	if (obj.type === 'player'){

  		console.log("Ello Mr. Player, you just collided with a FirePot!");

  	}

  }
}); 