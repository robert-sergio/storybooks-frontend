import Phaser from 'phaser';

type controlsType = Phaser.Types.Input.Keyboard.CursorKeys | undefined
type playerType = Phaser.Types.Physics.Arcade.SpriteWithDynamicBody

export const createControls = (scene:Phaser.Scene): controlsType  =>{
    return scene.input.keyboard?.createCursorKeys();
}

export const configControls = (player: playerType, controls: controlsType): void =>{
    player.setVelocityX(0)
    player.setVelocityY(0)

    if(controls?.right.isDown){
        moveRight(player)
        return
    }
    if(controls?.up.isDown){
        moveUp(player)
        return
    }
    if(controls?.left.isDown){
        moveLeft(player)
        return
    }
    if(controls?.down.isDown){
        moveDown(player)
        return
    }
    player.anims.play("player_idle", true);
}

const defaultVelocity = 200

const moveRight = (player: playerType): void => {
    player.setFlipX(false)
    player.anims.play('player_walk',true)
    player.setVelocityX(defaultVelocity)
}

const moveLeft = (player: playerType): void => {
    player.setFlipX(true)
    player.anims.play('player_walk',true)
    player.setVelocityX(-defaultVelocity)
}

const moveUp = (player: playerType): void => {
    player.anims.play('player_walk',true)
    player.setVelocityY(-defaultVelocity)
}

const moveDown = (player: playerType): void => {
    player.anims.play('player_walk',true)
    player.setVelocityY(defaultVelocity)
}