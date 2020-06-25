class Cenario {
    constructor(imagem, velocidade) {
        this.imagem = imagem;
        this.velocidade = velocidade;
        this.x1 = 0;
        this.x2 = windowWidth;
    }

    exibir() {
        image(this.imagem, this.x1, 0, windowWidth, windowHeight);
        image(this.imagem, this.x2, 0, windowWidth, windowHeight);
    }

    mover() {
        this.x1 = this.x1 - this.velocidade;
        this.x2 = this.x2 - this.velocidade;

        if (this.x1 < -windowWidth) {
            this.x1 = windowWidth;
        }

        if (this.x2 < -windowWidth) {
            this.x2 = windowWidth;
        }

    }
}