//1° listar todos os buttons, posso tentar um for que cria um array pra mim
//2° listar todos os áudios, mesma coisa de cima
//3° ouvir o click em todos os buttons
//4° identificar qual button é e seu respectivo som através do id e tag
//5° tocar o respectivo som

let buttons = document.querySelectorAll('.tecla');
let sounds = document.querySelectorAll('audio');

for(let i = 0; i <= buttons.length; i++){
    buttons[i].addEventListener('CLICK', () => console.log('clicado'));
};

//qualquer botão toca qualquer som nessa lógica
if(click === true){
    for(i = 0; i <= sounds.length; i++){
        sounds[i].play();
    };
};

function tocarSom(idAudio){
    document.querySelector(idAudio).play();
};