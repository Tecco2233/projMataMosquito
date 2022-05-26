var alt
var larg
var vidas = 1
var tempo = 100
var pontos = 0

var tempoMosca

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'facil') {
    tempoMosca = 3000
} else if (nivel === 'normal') {
    tempoMosca = 2000
} else if (nivel === 'dificil'){
    tempoMosca = 1000
} else if (nivel === 'masoquismo') {
    tempoMosca = 500
}

function ajustaTamanho() {
    alt = window.innerHeight
    larg = window.innerWidth
    console.log(larg, alt)
}
 
ajustaTamanho()

document.getElementById('pontuacao').innerHTML = pontos 
var cronometro = setInterval(function () {
    tempo -= 1

    document.getElementById('cronometro').innerHTML = tempo
    if (tempo == 0) {
        alert('vitoria')
        clearInterval(cronometro)
        clearInterval(criaMosca)

        window.location.href = 'vitoria.html?' + pontos
    }
}, 1000)

function posicaoMosca() {

    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if (vidas >= 3) {
            window.location.href= 'game_over.html?' + pontos
        }
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++
    }

    var posicaoX = Math.floor(Math.random() * larg) - 90
    var posicaoY = Math.floor(Math.random() * alt) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    posicaoX = posicaoX > larg ? 0 : posicaoX
    posicaoY = posicaoY > larg ? 0 : posicaoY

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.draggable = 'false'
    mosca.className = tamanhoMosca() + ' ' + ladoMosca()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.remove()
        pontos = pontos + 100
        document.getElementById('pontuacao').innerHTML = pontos 
    }


    document.body.appendChild(mosca)
}

function tamanhoMosca() {
    var classe = Math.floor(Math.random() * 7)

    switch (classe) {
        case 0:
            return 'mosca1';

        case 1:

            return 'mosca2';

        case 2:

            return 'mosca3';

        case 3:

            return 'mosca4';

        case 4:

            return 'mosca5';

        case 5:

            return 'mosca6';

        case 6:

            return 'mosca7';

        default:
            break;
    }
}

function ladoMosca() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            break;

        case 1:

            return 'ladoB';
        default:
            break;
    }
}
