class Pontuacao {
    constructor() {
        this.pontos = 0; // começando o jogo com 0 pontos
    }

    exibe() {
        textAlign(RIGHT); // somente alinhando a pontuação
        fill('#fff'); // cor da pontuação
        textSize(50); // tamanho do texto da pontuação
        text(parseInt(this.pontos), width - 30, 50) // colocando a pontuação no canto superior direito
    }

    adicionarPontos() {
        this.pontos = this.pontos + 0.2; // aumento de pontos por frame
    }
}