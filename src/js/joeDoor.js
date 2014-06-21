game.JoeDoor = me.ObjectEntity.extend({
  init: function(x, y, settings) {

    console.log("joeDoor init called"); // called

    this.parent(x, y, settings);

    this.gravity = 0; // needed?

    this.collidable = true;
  },


  onCollision: function() {

    console.log("COLLISION!"); // never called

    game.playScreen.endLevel();
  }
});