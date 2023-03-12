
let area = document.querySelector(".area");
let input = document.querySelector('.input').childNodes[0];

const cambiarColor = color => area.style.background = color;

const mostrarColor = dato => input.textContent = dato;

const originarColor = () => {
    let color = '#';

    let text = ["a", "b", "c", "d", "e", "f"];
    let ramText = Math.round(Math.random() * 5);
    let uno = Math.round(Math.random() * 9);
    let dos = Math.round(Math.random() * 9);
    
    let hexa = [text[ramText], uno, dos];

    let ramUno  = Math.round(Math.random() * 2);   
    let ramDos  = Math.round(Math.random() * 2);
    let ramTres = Math.round(Math.random() * 2);

        color +=  hexa[ramUno];
        color += hexa[ramDos];
        color += hexa[ramTres];


    cambiarColor(color);
    mostrarColor(color);
};

let boton = document.querySelector(".boton");
    boton.addEventListener('click' ,originarColor);
