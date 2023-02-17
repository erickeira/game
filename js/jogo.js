import Personagem from "./personagem.js"

export default class Jogo extends Phaser.Scene {
    constructor(){
        super({
            key : "Jogo"
        })
        this.personagem = null;
    }

    preload(){
        // Chama o método preload da classe Personagem
        this.personagem = new Personagem(this, 80, 90);
        this.personagem.preload();
        this.load.image('chao', './assets/terreno/chao.png');
        this.load.image('background', './assets/terreno/background.png');
    }

    create(){

        // const background = this.add.image(0,0, 'background')
        // background.setOrigin(0,0)

        const plataformas = this.physics.add.staticGroup();
        plataformas.create(0 - 184, 'chao')

        
        this.personagem.create();
    }

    update(){
        // Chama o método update da classe Personagem
        this.personagem.update();
    }
}