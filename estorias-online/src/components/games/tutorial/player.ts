import Phaser from 'phaser';

export const createPlayer = (scene:Phaser.Scene): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody =>{
    const player = scene.physics.add.sprite(200,200,'player_idle')
    createAnimations(scene)
    return player
}

export const loadSprites = (scene: Phaser.Scene) : void =>{
    scene.load.spritesheet('player_idle', '/game/tutorial_1/player/stand.png', {
        frameWidth:16,
        frameHeight:24,
        spacing:10
    })
    
    scene.load.spritesheet('player_walk', '/game/tutorial_1/player/walk.png', {
        frameWidth:16,
        frameHeight:24,
        spacing:10
    })
}

export const createAnimations = (scene: Phaser.Scene) : void =>{
    scene.anims.create({
        key:'player_walk',
        frames: scene.anims.generateFrameNames('player_walk',{
            start:0,
            end:1
        }),
        frameRate:24,
    })
    scene.anims.create({
        key:'player_idle',
        frames: scene.anims.generateFrameNames('player_idle',{
            start:0,
            end:0
        })
    })
}