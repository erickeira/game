import Jogo from "./jogo.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: [ Jogo ]
    // scene: {
    //   preload: preload,
    //   create: create
    // }
  };
  
  var game = new Phaser.Game(config);
  
