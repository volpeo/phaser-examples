
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('background','assets/misc/starfield.jpg');
    game.load.image('ufo','assets/sprites/space-baddie.png');
    game.load.image('player','assets/sprites/phaser-dude.png');

}

var player;
var fixed;
var cursors;

function create() {

    game.add.tileSprite(0, 0, 2000, 2000, 'background');

    game.world.setBounds(0, 0, 1400, 1400);

    for (var i = 0; i < 100; i++)
    {
        game.add.sprite(game.world.randomX, game.world.randomY, 'ufo');
    }

    game.physics.startSystem(Phaser.Physics.P2JS);

    fixed = game.add.sprite(300, 320, 'player');
    fixed.fixedToCamera = true;
    fixed.cameraOffset.x = 300;
    fixed.cameraOffset.y = 300;

    player = game.add.sprite(150, 320, 'player');

    game.physics.p2.enable(player);

    cursors = game.input.keyboard.createCursorKeys();

    game.camera.follow(player);

}

function update() {

    player.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        player.body.moveUp(200)
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(200);
    }

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -200;
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(200);
    }

}

function render() {

    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(player, 32, 200);
    game.debug.spriteCoords(fixed, 600, 200);

}
