game.FirePot = me.ObjectEntity.extend({
	"init": function(x, y, settings) {

  	console.log("FirePot init called"); // called

  	this.parent(x, y, settings);

  	this.type = "FirePot"

  	// LET'S CREATE SOME FIRE!
    var image = me.loader.getImage('particle_explosion');
    var emitter = new me.ParticleEmitter(x, y, {
      image: image,
      width: 7,
      totalParticles: 5,
      angle: 1.5409544421277865,
      angleVariation: 0.49658186084145983,
      speed: 2.234328136649182,
      speedVariation: 1.392723484329839,
      gravity: -0.08,
      wind: 0.01,
      frequency: 1,
      maxEndScale: 0.1,
      minEndScale: 0
    });
    emitter.name = 'fire';
    emitter.z = 4;
    me.game.world.addChild(emitter);
    me.game.world.addChild(emitter.container);
    emitter.streamParticles();

    console.log("Allegedly streaming particles");

  },

  onCollision: function(res, obj){

  	if (obj.type === 'player'){

  		console.log("Ello Mr. Player, you just collided with a FirePot!");

  	}

  }
}); 