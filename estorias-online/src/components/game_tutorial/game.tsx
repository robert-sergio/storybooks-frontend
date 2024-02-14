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
        }

        create (){
        }
    }

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
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