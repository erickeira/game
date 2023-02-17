// import Phaser from 'phaser';

export default class parado {
    constructor(cena, x, y) {
        this.cena = cena;
        this.sprite = null;
        this.x = x;
        this.y = y;
        this.velocidade = 200;
        this.direcao = 'direita';
        this.agachado = false;
    }

    preload() {
        this.cena.load.spritesheet('parado', './assets/personagens/fantasma/idle.png', {
            frameWidth: 80,
            frameHeight: 90
        });
        this.cena.load.spritesheet('andando', './assets/personagens/fantasma/walk.png', {
            frameWidth: 80,
            frameHeight: 90
        });
    }

    create() {

        this.sprite = this.cena.physics.add.sprite(80, 90, 'parado');

        // Define a sequência de quadros (frames) da animação
        const paradoFrames = this.cena.anims.generateFrameNumbers('parado', { 
            start: 0, end: 1 
        });

        // Cria a animação e adiciona à sprite
        this.cena.anims.create({
            key: 'parado',
            frames: paradoFrames,
            frameRate: 1,
            repeat: -1
        });

        // Inicia a animação
        this.sprite.anims.play('parado', true);
        this.cena.physics.add.existing(this.sprite);

        const moverDireitaFrames = this.cena.anims.generateFrameNumbers('walk', { 
            start: 0, end: 1 
        });
        this.cena.anims.create({
            key: 'walk',
            frames: moverDireitaFrames,
            frameRate: 1,
            repeat: -1
        });


        const moverEsquerdaFrames = this.cena.anims.generateFrameNumbers('walk', { 
            start: 0, end: 1 
        });
        this.cena.anims.create({
            key: 'walk',
            frames: moverEsquerdaFrames,
            frameRate: 1,
            repeat: -1
        });

        this.cena.input.keyboard.on('keydown-LEFT', () => {
            console.log(`Andando...`)
            this.sprite.setVelocityX(-this.velocidade);
            if (this.direcao != 'esquerda') {
                this.direcao = 'esquerda';
                this.sprite.anims.play('walk', true);
            }
        });

        this.cena.input.keyboard.on('keydown-RIGHT', () => {
            this.sprite.setVelocityX(this.velocidade);
            if (this.direcao != 'direita') {
                this.direcao = 'direita';
                this.sprite.anims.play('walk', true);
            }
        });
    }

    update() {

    }
    
}