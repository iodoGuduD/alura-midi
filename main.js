//1° listar todos os buttons, posso tentar um for que cria um array pra mim
//2° listar todos os áudios, mesma coisa de cima
//3° ouvir o click em todos os buttons
//4° identificar qual button é e seu respectivo som através do id e tag
//5° tocar o respectivo som

let buttons = [];
let sounds = [];

buttons = document.querySelectorAll('button');
sounds = document.querySelectorAll('audio');

for(i = 0; i <= buttons.length; i++){
    buttons.push([i]);
};

console.log(buttons);

document.querySelector('#som_tecla_pom').play();