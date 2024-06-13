//const canvas = document.querySelector ('#canvas')
const canvas = document.getElementById ('canvas')
const quadro = canvas.getContext('2d')
const audio = new Audio('assets/pew.mp3')

quadro.fillStyle = '#ffffff'
let player1 ={
    px:80, //posição do eixo x
    py:260, //posição do eixo y
    tamanho:30, // altura do jogador no eixo X
    largura:200, // largura do jogador no eixo y
    dir:0, 
    largura:200
}
let player2 ={
    px:1168,
    py:260,
    tamanho:30,
    largura:200,
    dir:0
}
let bolinha ={
    px:625,
    py:345,
    tamanho:30, // largura da bolinha no eixo x
    largura:30, // altura da bolinha no eixo y
    dir:8,
    dirY:2,
}
 
quadro.font = '30px arial'
let pts1 = 0
let pts2 = 0
let score1 = quadro.fillText('Score 1: ' + pts1, 200, 50)
let score2 = quadro.fillText('Score 2: ' + pts2, 975, 50)

let jogar = true


document.addEventListener('keydown', function (e){
    if(e.keyCode === 87){
        player1.dir = - 8
    }
    else if(e.keyCode === 83){
        player1.dir = 8
    }      
})

document.addEventListener('keyup', function (e){
    if(e.keyCode === 87){
        player1.dir = 0
    }
    else if(e.keyCode === 83){
        player1.dir = 0
    }      
})
+
document.addEventListener('keydown', function (e){
    if(e.keyCode === 38){
        player2.dir = - 8
    }
    else if(e.keyCode === 40){
        player2.dir = 8
    }      
})

document.addEventListener('keyup', function (e){
    if(e.keyCode === 38){
        player2.dir = 0
    }
    else if(e.keyCode === 40){
        player2.dir = 0
    }      
})

function moverPlayer1(){
    if(player1.py < 0){
        player1.py = 0
    }
    else if(player1.py > 520){
        player1.py = 520
    }
    player1.py += player1.dir
}

function moverPlayer2(){
    if(player2.py < 0){
        player2.py = 0
    }
    else if(player2.py > 520){
        player2.py = 520
    }

    player2.py += player2.dir
}

function moverBolinha(){
    bolinha.px += bolinha.dir
    bolinha.py += bolinha.dirY

    if(bolinha.py < 0){
        bolinha.dirY *= -1
    }
    else if(bolinha.py > 690){
        bolinha.dirY *= -1
    }
} 

function colisaoBolinha(){
         if(bolinha.py + bolinha.largura >= player2.py && bolinha.py <= player2.py + player2.largura 
            && bolinha.px <= player2.px + player2.tamanho && bolinha.px >= player2.px - player2.tamanho){
            bolinha.dir *= -1
            audio.play()
        }
        else if(bolinha.py + bolinha.largura >= player1.py && bolinha.py <= player1.py + player1.largura 
            && bolinha.px <= player1.px + player1.tamanho && bolinha.px >= player1.px - player1.tamanho){
            bolinha.dir *= -1
            audio.play()
        }
} 

function pontos(){
    if(bolinha.px < - 100){
        bolinha.px = 625
        bolinha.py = 345
        bolinha.dir *= -1
        pts1++
    }
    else if(bolinha.px > 1380){
        bolinha.px = 625
        bolinha.py = 345
        bolinha.dir *= -1 
        pts2++
    }
}
function moverBolinha(){
bolinha.px += bolinha.dir
bolinha.py += bolinha.dirY

     if(bolinha.py < 0){
        bolinha.dirY *= -1
    }
    else if(bolinha.py > 690){
        bolinha.dirY *= -1
    }
} 

function fimJogo(){
    if(pts1 > 2 || pts2 > 2){
        jogar = false
    }
}

function draw(){
    quadro.fillRect(player1.px, player1.py, player1.tamanho, player1.largura)
    quadro.fillRect(player2.px, player2.py, player2.tamanho, player2.largura)
    quadro.fillRect(bolinha.px, bolinha.py, bolinha.tamanho, bolinha.largura)
    quadro.fillText(`Pontos1 : ${pts1}`, 280,50)
    quadro.fillText(`Pontos2 : ${pts2}`, 800,50)
}

function telaVencedor(){
    quadro.clearRect(0,0,1280,720)
    quadro.font = '60px arial'
    quadro.fillText(`score 1: ${pts1}`, 200,345)
    quadro.fillText(`score 2: ${pts2}`, 800,345)
}
function main(){
    if(jogar){
    quadro.clearRect(0, 0, 1280, 720) //Limpar todo o objeto "canvas"
    draw() //Redesenhar
    moverBolinha()
    moverPlayer1()
    moverPlayer2()
    colisaoBolinha()
    pontos()
    fimJogo()
    }
    else{
        telaVencedor()
    }
}

setInterval(main, 10)