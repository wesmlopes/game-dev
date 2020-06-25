var imagemCenario;
var imagemPersonagem;
var cenario;
var somJogo;
var personagem;

function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    somJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(imagemPersonagem);
    frameRate(46);
    somJogo.play(); //executando a musica várias vezes
}

function draw() {
    cenario.exibir();
    cenario.mover();
    personagem.exibir();
}