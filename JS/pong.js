//const canvas = document.querySelector ('#canvas')
const canvas = document.getElementById ('canvas')
const quadro = canvas.getContext('2d')

quadro.fillStyle = '#ffffff'
let player1 ={
    px:80,
    py:260,
    tamanho:30,
    largura:200
}
let player2 ={
    px:1168,
    py:260,
    tamanho:30,
    largura:200,
}
let bolinha ={
    px:625,
    py:345,
    tamanho:30,
    largura:30,
    dir:8,
}
 
quadro.font = '30px arial'
let pts1 = 0
let pts2 = 0
let score1 = quadro.fillText('Score 1: ' + pts1, 200, 50)
let score2 = quadro.fillText('Score 2: ' + pts2, 975, 50)

function moverBolinha(){
bolinha.px += bolinha.dir
     if(bolinha.px > 1168){
        bolinha.dir *= -1
    }
    else if(bolinha.px < 80){
        bolinha.dir *= -1
    }
} 

function draw(){
    quadro.fillRect(player1.px, player1.py, player1.tamanho, player1.largura)
    quadro.fillRect(player2.px, player2.py, player2.tamanho, player2.largura)
    quadro.fillRect(bolinha.px, bolinha.py, bolinha.tamanho, bolinha.largura)
}
function main(){
    quadro.clearRect(0, 0, 1280, 720) //Limpar todo o objeto "canvas"
    draw() //Redesenhar
    moverBolinha()
}

setInterval(main, 10)