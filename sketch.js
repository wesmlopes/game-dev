function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(40); // frames por segundo
    somDoJogo.loop();
    jogo = new Jogo();
    telaInicial = new TelaInicial();
    jogo.setup();
    cenas = {
        jogo,
        telaInicial
    };
    botaoGerenciador = new BotaoGerenciador('Iniciar', windowWidth / 2, windowHeight / 2);
}

function keyPressed() {
    jogo.keyPressed(key);
}

function draw() {
    cenas[cenaAtual].draw();
}