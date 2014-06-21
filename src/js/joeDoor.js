game.JoeDoor = me.ObjectEntity.extend({
  init: function(x, y, settings) {

    console.log("joeDoor init called");

    this.parent(x, y, settings);

    this.gravity = 0;

    this.collidable = true;
  },


  onCollision: function() {

    console.log("COLLISION!");

    game.playScreen.endLevel();
  }
});