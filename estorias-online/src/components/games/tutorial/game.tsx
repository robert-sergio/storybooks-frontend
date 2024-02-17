import { Game as PhaserGame } from "phaser";
import { useEffect, useRef, useState } from "react";
import Phaser from 'phaser';
import {createPlayer, loadSprites } from './player'
import {createControls, configControls} from './controls'


export default function Game() {
    const parentEl = useRef<HTMLDivElement>(null);
    const [game, setGame] = useState<PhaserGame | null>(null);
    
    class Example extends Phaser.Scene
    {
        player: any 
        controls: Phaser.Types.Input.Keyboard.CursorKeys | undefined

        preload ()
        {
            this.load.image('tiles','/game/tutorial_1/grass.png')
            this.load.image('border','/game/tutorial_1/water.png')
            this.load.tilemapTiledJSON('map','/game/tutorial_1/map.json')
            loadSprites(this)
        }

        create (){
            const map = this.make.tilemap({key: 'map'})
            const tileSetGrass = map.addTilesetImage('grass', 'tiles') as Phaser.Tilemaps.Tileset
            const tileSetWater = map.addTilesetImage('water', 'border') as Phaser.Tilemaps.Tileset

            const ground = map.createLayer('grass', tileSetGrass, 0, 0)
            const water = map.createLayer('water', tileSetWater, 0, 0)

            this.player = createPlayer(this)
            this.controls = createControls(this)
        }

        update(time: number, delta: number): void {
            configControls(this.player, this.controls)
        }
    }

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 640,
        scene: Example,
        scale:{
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        }
    };

    useEffect(() => {
      if (!parentEl.current) return;
      if (game != null) return;
  
      const newGame = new PhaserGame(config);
      setGame(newGame)

    //     return () => {
    //     newGame?.destroy(true, true);
    //     console.log("🐲 DESTROY 🐲");
    //   };
    }, []);

    // const newGame = new PhaserGame(config);


    return (
        <div ref={parentEl} id={'gameContainer'} className="absolute right-10"/>
    );
}