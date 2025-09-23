

const cuadro = document.querySelector('#cuadros');
function crearDivs() {
    cuadro.innerHTML = '';

    const anchoPantalla = window.innerWidth;
    const anchoCaja = 40
    const cantidad= Math.floor(anchoPantalla / anchoCaja);
    
    for (let i = 1; i <= cantidad; i++) {
        const cajas = document.createElement('div');
        cajas.classList.add('cajas');
       cajas.classList.add(`color${Math.floor(Math.random() * 4) + 1}`);

        cuadro.appendChild(cajas);
        console.log("Hola Maicol");

        cuadro.addEventListener('mouseover', () => {
            cajas.classList.remove('color1', 'color2', 'color3', 'color4'); 
            cajas.classList.add(`color${Math.floor(Math.random() * 4) + 1}`);
        })

    }
} 

window.addEventListener('resize', crearDivs);
window.addEventListener('load', crearDivs);


