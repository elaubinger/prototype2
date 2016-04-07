
var game = new Phaser.Game(1200, 800, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

function preload () {

    //deprecated
    game.load.atlas('tank', 'assets/games/tanks/tanks.png', 'assets/games/tanks/tanks.json');
    game.load.atlas('enemy', 'assets/games/tanks/enemy-tanks.png', 'assets/games/tanks/tanks.json');
    
    
    game.load.image('tank1', 'assets/games/tanks/tank1.png');
    game.load.image('tank2', 'assets/games/tanks/tank2.png');
    game.load.image('tank3', 'assets/games/tanks/tank3.png');
    game.load.image('shadow', 'assets/games/tanks/shadow.png');
    game.load.image('turret', 'assets/games/tanks/turret.png');
    game.load.image('turret1', 'assets/games/tanks/turret1.png');
    game.load.image('logo', 'assets/games/tanks/logo.png');
    game.load.image('lose', 'assets/games/tanks/lose.png');
    game.load.image('win', 'assets/games/tanks/win.png');
    game.load.image('bullet', 'assets/games/tanks/bullet.png');
    game.load.image('bullet1', 'assets/games/tanks/bullet1.png');
    game.load.image('earth', 'assets/games/tanks/scorched_earth.png');
    
    game.load.spritesheet('kaboom', 'assets/games/tanks/explosion.png', 128, 128, 12);
    game.load.spritesheet('explosionanim', 'assets/games/tanks/explosionanim.png', 35, 43, 15);
    game.load.spritesheet('smokeanim', 'assets/games/tanks/smokeanim.png', 32, 45, 27);
    
    game.load.audio('music', 'assets/audio/soundtrack.ogg');
    game.load.audio('gameover', 'assets/audio/game-over.ogg');
    game.load.audio('missioncomplete', 'assets/audio/Mission_Complete.ogg');
    game.load.audio('fire', 'assets/audio/smgshoot.ogg');
    game.load.audio('enemyfire', 'assets/audio/semishoot.ogg');
    game.load.audio('hit', 'assets/audio/impact.ogg');
    game.load.audio('explode', 'assets/audio/explode.ogg');
    
    
}

var land;

var tank;
var enemy;

var music;
var missioncompletefx;
var gameoverfx;
var firefx;
var enemyfirefx;
var hitfx;
var explodefx;

var maxRooms = 8;
var minRooms = 3;

var maxHeight = 100;
var minHeight = 20;

var maxWidth = 100;
var minWidth = 20;

var xMax = 600;
var xMin = 0;

var yMax = 600;
var yMin = 0;

var playerTurn = true;

var Room = class Room{
    constructor(height, width, x, y){
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }
}

function create () {

    game.renderer.renderSession.roundPixels = true;
    
    //  Resize our game world to be a 2000 x 2000 square
    game.world.setBounds(-1000, -1000, 2000, 2000);

    music = game.add.audio('music');
    music.volume = 4.0;
    gameoverfx = game.add.audio('gameover');
    missioncompletefx = game.add.audio('missioncomplete');
    firefx = game.add.audio('fire');
    firefx.volume = 0.5;
    enemyfirefx = game.add.audio('enemyfire');
    enemyfirefx.volume = 0.5;
    hitfx = game.add.audio('hit');
    explodefx = game.add.audio('explode');
    
    rooms = game.rnd.integerInRange(minRooms, maxRooms+1);
    roomArray = new Array(rooms);
    
    for(i = 0; i < rooms; i++){
        roomArray[i] = new Room(
            game.rnd.integerInRange(minHeight, maxHeight+1),
            game.rnd.integerInRange(minWidth, maxWidth+1),
            game.rnd.integerInRange(xMin, xMax+1),
            game.rnd.integerInRange(yMin, yMax+1));
    }
    
    var graphics = game.add.graphics(100, 100);
    graphics.lineStyle(10, 0x0000FF, 1);
    graphics.beginFill(0x0000FF, 1);
    
    for(i = 0; i < roomArray.length; i++){
        graphics.drawRect(roomArray[i].x, roomArray[i].y, roomArray[i].height, roomArray[i].width);
    }
    
    graphics.endFill();
    graphics.moveTo(roomArray[0].x, roomArray[0].y);
    
    for(i = 1; i < roomArray.length; i++){
        graphics.lineTo(roomArray[i].x,roomArray[i].y);
        graphics.moveTo(roomArray[i].x,roomArray[i].y);
    }
    

}

function update () {
    
}

function render () {
    
}

