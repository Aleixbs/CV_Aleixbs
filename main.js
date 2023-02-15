// 1- Submit form message and animation
// addEventListener()
function verificacion(){
    const paginaAnimacion = document.getElementById('contactPage');
    const paginaResultado = document.getElementById('resultadoVerificacion')

    paginaAnimacion.innerHTML = 'Enviado, Muchas gracias'
    paginaAnimacion.id = 'animacionResultado'

}

// 2-  Explicación del nombre chino

function nombrechino1(){
    newText = document.createElement('p'); 
    newText.id = 'nuevoTexto2'
    newText.classList = 'mouseOver'
    var contenidotexto = document.createTextNode(`El caracter (安) se pronuncia ('an') en pinyin y significa tranquilidad/seguridad `) 
    newText.appendChild(contenidotexto);
    document.getElementById('mainPage-left').appendChild(newText);

}

function limpieza1(){
    document.getElementById('mainPage-left').removeChild(newText);
}

function nombrechino2(){
    newText = document.createElement('p'); 
    newText.id = 'nuevoTexto2'
    newText.classList = 'mouseOver'
    var contenidotexto = document.createTextNode(`El caracter (林) se pronuncia ('lin') en pinyin y significa bosque/naturaleza `) 
    newText.appendChild(contenidotexto);
    document.getElementById('mainPage-left').appendChild(newText);

}

function limpieza2(){
    document.getElementById('mainPage-left').removeChild(newText);
}

function nombrechino3(){
    newText = document.createElement('p'); 
    newText.id = 'nuevoTexto2'
    newText.classList = 'mouseOver'
    var contenidotexto = document.createTextNode(`El caracter (时) se pronuncia ('shi') en pinyin y significa tiempo/horas `) 
    newText.appendChild(contenidotexto);
    document.getElementById('mainPage-left').appendChild(newText);

}

function limpieza3(){
    document.getElementById('mainPage-left').removeChild(newText);
}


// 3- Get the day of the week + time and greet the visitor according to it
function greetings(){
    const dias = new Date();
    var dia = dias.getDay()
    var mensaje = '¡Hola! Gracias por entrar a mi página personal, Que pases un agradable'
    console.log(dia)
    if (dia === 0){
        console.log('domingo')
        document.getElementById('mensajebienvenida').innerHTML = mensaje +  ' domingo.'
    } else if (dia === 1){
        console.log('lunes')
        document.getElementById('mensajebienvenida').innerHTML = mensaje +  ' lunes.'
    } else if(dia === 2){
        console.log('martes')
        document.getElementById('mensajebienvenida').innerHTML = mensaje +  ' martes.'
    } else if(dia ===3 ){
        console.log('miércoles')
        document.getElementById('mensajebienvenida').innerHTML = mensaje +  ' miércoles.'
    } else if(dia == 4){
        console.log('jueves')
        document.getElementById('mensajebienvenida').innerHTML = mensaje +  ' jueves.'
    } else if(dia === 5){
        console.log('viernes')
        document.getElementById('mensajebienvenida').innerHTML = mensaje +  ' viernes.'
    } else if (dia === 6){
        console.log('sábado')
        document.getElementById('mensajebienvenida').innerHTML = mensaje +  ' sábado.'
    }
}

function escondertexto(){
    
    var mensajebienvenida = document.getElementById('mensajebienvenida')
    document.getElementById('mainPage').removeChild(mensajebienvenida)
}


window.addEventListener('load',greetings);
setTimeout(escondertexto,4000)
// window.addEventListener('scroll',escondertexto)


// 4- Botón Saber más sobre mi (En la main page) con por ejemplo mi edad, dia y mes de aniversario, mis hobbies, etc. 

function sabermasdemi(){
    const birthday = {
        dia: 5,
        mes: 'Diciembre'
    };
    newText = document.createElement('p'); 
    newText.id = 'nuevoTexto'
    newText.classList = 'mouseOver'
    var contenidotexto = document.createTextNode(`¡Mi cumpleaños es el ${birthday.dia} de ${birthday.mes}!, (Puedes hacer click sobre mi foto para descargarte mi Cv)`) 
    newText.appendChild(contenidotexto);
    document.getElementById('mainPage-right').appendChild(newText); 
    
    // Se tiene que cambiar el console.log por una impresión dentro del HTML
    console.log(`¡Mi cumpleaños es el ${birthday.dia} de ${birthday.mes}! (Puedes hacer click sobre mi foto para descargarte mi Cv)`);

}

function limpieza(){
    document.getElementById('mainPage-right').removeChild(newText);
}

// 5- Animar los eventos de la Trayectoria profesional

const observer = new IntersectionObserver(function(entries){
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // entry.target.classList.remove('hidden')
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElementos = document.querySelectorAll('.hidden'); 
hiddenElementos.forEach(function(element) {
    return observer.observe(element)
});

// 6 - Botón de leer más

function leerMas(){
    var masTexto = document.getElementById('masTexto'); 
    var botonMasMenos = document.getElementById('botonMasMenos');
    var texto = ' Cumque deleniti cum, esse sapiente repellendus autem quos ab reprehenderit dolores.'
    if (botonMasMenos.innerHTML === 'Leer Mas'){
        masTexto.innerHTML = texto
        botonMasMenos.innerHTML = 'Leer Menos'
        
    } else  {
        document.getElementById('masTexto').innerHTML = ''
        botonMasMenos.innerHTML = 'Leer Mas'; 
    }
}

function leerMas2(){
    var masTexto = document.getElementById('masTexto2'); 
    var botonMasMenos = document.getElementById('botonMasMenos2');
    var texto = ' Cumque deleniti cum, esse sapiente repellendus autem quos ab reprehenderit dolores.'
    if (botonMasMenos.innerHTML === 'Leer Mas'){
        masTexto.innerHTML = texto
        botonMasMenos.innerHTML = 'Leer Menos'
        
    } else  {
        document.getElementById('masTexto2').innerHTML = ''
        botonMasMenos.innerHTML = 'Leer Mas'; 
    }
}