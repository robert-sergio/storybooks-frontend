import { Game as PhaserGame } from "phaser";
import { useEffect, useRef, useState } from "react";
import Phaser from 'phaser';

export default function Game() {
    const parentEl = useRef<HTMLDivElement>(null);
    const [game, setGame] = useState<PhaserGame | null>(null);

    class Example extends Phaser.Scene
    {
        preload ()
        {
            this.load.image('sky', '/game/space3.png');
            this.load.image('logo', '/game/phaser3-logo.png');
            this.load.image('red', '/game/red.png');
        }

        create (){
            this.add.image(400, 300, 'sky');

            const particles = this.add.particles(0, 0, 'red', {
                speed: 200,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD'
            });

            const logo = this.physics.add.image(400, 100, 'logo');

            logo.setVelocity(100, 200);
            logo.setBounce(1, 1);
            logo.setCollideWorldBounds(true);

            particles.startFollow(logo);
        }
    }

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: Example,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
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
        <div ref={parentEl} id={'gameContainer'}/>
    );
}