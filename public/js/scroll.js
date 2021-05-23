let animado = document.querySelectorAll(".animado")
let animadoHeader = document.querySelectorAll(".animadoHeader")
let animadoHeaderIzquierda = document.querySelectorAll(".animadoHeaderIzquierda")

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop
    for(let i = 0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop
        if(alturaAnimado - 500 < scrollTop){
            animado[i].style.opacity= 1
        }
    }
}
function mostrarHeader(){
    for(let i = 0; i < animadoHeader.length; i++){  
        if(animadoHeader[i]){
            animadoHeader[i].style.opacity= 1
        }
    }
}

function mostrarHeaderIzquierda(){
    for(let i = 0; i < animadoHeaderIzquierda.length; i++){
        if(animadoHeaderIzquierda[i]){
            animadoHeaderIzquierda[i].style.opacity= 1
        }
    }
}

window.addEventListener("scroll", mostrarScroll)
window.addEventListener("load", mostrarHeader)
window.addEventListener("load", mostrarHeaderIzquierda)