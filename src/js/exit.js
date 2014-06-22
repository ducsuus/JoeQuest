game.Exit = me.ObjectEntity.extend({

    "init": function(x, y, settings) {

    console.log("Exit init called"); // called

    this.parent(x, y, settings);

    this.collidable = true;
    },

    "onCollision" : function (res, obj) {

        console.log("onCollision was called in exit.js");

        /* End of level?
        if (game.errands.complete && !game.playscreen.exit) {
            game.playscreen.exit = true;
            me.game.viewport.fadeIn("#000", 500, function () {
                if (me.levelDirector.getCurrentLevelId() === "library") {
                    // End of game?
                    me.state.change(me.state.GAME_END);
                }
                else {
                    me.levelDirector.nextLevel.defer();
                }
            });
        }*/
    }
});