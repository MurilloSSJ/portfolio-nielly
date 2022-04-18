const navMenu = document.querySelector('.navMenu ul')
const navItens = Array.prototype.slice.call(navMenu.children)
navItens.forEach((element) => element.addEventListener('click',verificaMenu))
var actualElement = document.querySelector('.home')
function verificaMenu(event){
    text = event.target.innerText
    actualElement.style.display = 'none'
    if(text == 'Início'){
        document.querySelector('.home').style.display = 'flex'
        actualElement = document.querySelector('.home')
    }else if(text == 'Sobre Mim'){
        document.querySelector('.aboutMe').style.display = 'flex'
        actualElement = document.querySelector('.aboutMe')
    }else if(text == 'O que eu faço'){
        document.querySelector('.whatIDo').style.display = 'flex'
        actualElement = document.querySelector('.whatIDo')
    }else if(text== 'Contato'){
        document.querySelector('.contact').style.display = 'flex'
        actualElement = document.querySelector('.contact')
    }
}