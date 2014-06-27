//game resources
game.resources = [
    /**
     * Graphics.
     */
    // our level tileset
    {name: "area01_level_tiles",  type:"image", src: "data/img/map/area01_level_tiles.png"},
    //better tileset
    {name: "free_tileset_version_10",  type:"image", src: "data/img/map/free_tileset_version_10.png"},
    {name: "tileset_version_10_big",  type:"image", src: "data/img/map/tileset_version_10_big.png"},
    // our metatiles
    {name: "metatiles32x32",  type:"image", src: "data/img/map/metatiles32x32.png"},
    {name: "metatiles32x32_big",  type:"image", src: "data/img/map/metatiles32x32_big.png"},

    // main player spritesheet
    {name: "gripe_run_right",  type:"image", src: "data/img/sprite/gripe_run_right.png"},
    {name: "gripe_run_right_small",  type:"image", src: "data/img/sprite/gripe_run_right_small.png"},
    {name: "gripe_run_right_small_cropped",  type:"image", src: "data/img/sprite/gripe_run_right_small_cropped.png"},

    // NPC textures
    {name: "npc_fred",  type:"image", src: "data/img/entity/npc/fred.png"},

    // particle textures
    {name: "particle_explosion",  type:"image", src: "data/img/entity/particle/explosion.png"},
    {name: "particle_smoke",  type:"image", src: "data/img/entity/particle/smoke.png"},

    // fonts
    {name: "32x32_font",  type:"image", src: "data/img/font/32x32_font.png"},
     
    /* 
     * Maps. 
     */
    {name: "area01", type: "tmx", src: "data/map/area01.tmx"},
    {name: "area02", type: "tmx", src: "data/map/area02.tmx"},
    {name: "land_am", type: "tmx", src: "data/map/land_am.tmx"},
    {name: "restraunt", type: "tmx", src: "data/map/restraunt.tmx"},
    {name: "aquon", type: "tmx", src: "data/map/aquon.tmx"}
 
];