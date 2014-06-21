game.JoeDoor = me.ObjectEntity.extend({
  init: function(x, y, settings) {
    this.parent(x, y, settings);
  },

  onCollision: function() {
    game.playScreen.endLevel();
  }
});