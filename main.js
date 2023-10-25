//1° listar todos os buttons, posso tentar um for que cria um array pra mim
//2° listar todos os áudios, mesma coisa de cima
//3° ouvir o click em todos os buttons
//4° identificar qual button é e seu respectivo som através do id e tag
//5° tocar o respectivo som

let buttons = document.querySelectorAll('.tecla');

for(let i = 0; i <= buttons.length; i++){
    let button = buttons[i];
    let soundfier = button.classList[1];
    let sound = `#som_${soundfier}`;

    function tocarSom(idAudio){
        document.querySelector(idAudio).play();
    };

    function click(){
        button.addEventListener("click", tocarSom(sound));
    };
};
