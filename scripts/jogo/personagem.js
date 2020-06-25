class Personagem {
    constructor(imagem) {
        this.imagem = imagem;
        this.matriz = [
            [0, 0],
            [220, 0],
            [440, 0],
            [660, 0],
            [0, 270],
            [220, 270],
            [440, 270],
            [660, 270],
            [0, 540],
            [220, 540],
            [440, 540],
            [660, 540],
            [0, 810],
            [220, 810],
            [440, 810],
            [660, 810],
        ]
        this.frameImagem = 0;
    }

    exibir() {
        image(this.imagem, 0, windowHeight - 135, 110, 135,
            this.matriz[this.frameImagem][0], this.matriz[this.frameImagem][1], 220, 270);

        this.animacao();
    }

    animacao() {
        this.frameImagem++;

        if (this.frameImagem >= this.matriz.length - 1) {
            this.frameImagem = 0;
        }

    }
}