const boneco = document.querySelector('.boneco');
const cano = document.querySelector('.cano');

const jump = () => {
    boneco.classList.add('jump');

    setTimeout(() => {
        boneco.classList.remove('jump');

    },500);


}


const loop = setInterval(() => {

    const canoPosition = cano.offsetLeft;
    const bonecoPosition = +window.getComputedStyle(boneco).bottom.replace('px','');
    console.log(bonecoPosition);

    if (canoPosition <= 120 && canoPosition > 0 && bonecoPosition < 80){
        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        boneco.style.animation = 'none';
        boneco.style.bottom = `${canoPosition}px`;

        
        boneco.src = "./imagens/game-over.png"
        boneco.style.width = '70px'
        boneco.style.marginLeft = '50px'
        clearInterval(loop)
        
    }

   
    
} , 10);

document.addEventListener('keydown', jump);
