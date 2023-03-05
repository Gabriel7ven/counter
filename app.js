//selecionando os botões e o display do contador e armazendo em variáveis
const totalDisplay = document.getElementById('total');
const possibleChoices = document.querySelectorAll('button');

const btnDecrease = document.getElementById('decrease');//Para ser utilizada com o código que está comentado
const btnReset = document.getElementById('reset');//Para ser utilizada com o código que está comentado
const btnIncrease = document.getElementById('increase');//Para ser utilizada com o código que está comentado
let result = 0;

//executando uma função sobre cada um dos botões através do método forEach()
possibleChoices.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const btnChoosen = e.target.id;
        if(btnChoosen === 'decrease'){
            result--;
        }else if(btnChoosen === 'increase'){
            result++;
        }else {
            result = 0;
        }
        resultColor();
        totalDisplay.innerHTML = result;
    })
})
////Este código comentado foi a minha primeira solução solução do problema.
// btnDecrease.addEventListener('click', function() {
//     result--;
//     totalDisplay.innerHTML = result;
//     resultColor();
// })

// btnReset.addEventListener('click', function() {
//     result = 0;
//     totalDisplay.innerHTML = result;
//     resultColor();
// })

// btnIncrease.addEventListener('click', function() {
//     result++;
//     totalDisplay.innerHTML = result;
//     resultColor();
// })

function resultColor(){
    if(result < 0){
    totalDisplay.style.color = 'red';
    }else if(result === 0){
    totalDisplay.style.color = 'black';   
    }else if(result > 0){
    totalDisplay.style.color = 'green';
    }
}