let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'img/img1.jpg') {
      miImage.setAttribute('src','img/img2.jpg');
    } else {
      miImage.setAttribute('src', 'img/img1.jpg');
    }
}








// PARTE 1  
function miFuncion1(){  
  var texto="";  
  var parrafos = document.getElementsByTagName("p");
  console.log(parrafos);
  for(var i=0;i<parrafos.length;i++){  
    texto+=parrafos.item(i).innerHTML+", ";  
  };  
  texto=texto.slice(0, -2)+".";//cambia la última coma por punto  
  alert(texto);  
}

// PARTE 2
function miFuncion2(){
		var nuevotexto = document.createElement("p");
		nuevotexto.innerHTML = "Texto del nuevo párrafo";
		document.body.appendChild(nuevotexto);
	}

// PARTE 3  
var i=0; //i se usa para numerar los nuevos párrafos  
function miFuncion3(){  
  i+=1;  
  var parrafos = document.getElementsByTagName("p"); //cuenta los que hay  
  var nuevo_parrafo = document.createElement('p'); //crea una nueva etiqueta p  
  var texto = document.createTextNode('Texto del nuevo párrafo '+i);  
  nuevo_parrafo.appendChild(texto); //añade el texto a la nueva etiqueta p  
  var alea=Math.floor(Math.random() * parrafos.length); //posición aleatoria  
  //definimos la variable parrafo_ref que es el párrafo de referencia  
  //el párrafo de referencia se usa para saber después de quien va el nuevo párrafo  
  //dentro de los corchetes [] se pone la posición donde ira el nuevo  
  var parrafo_ref = document.getElementById('contenido').getElementsByTagName('p')[alea];  
  //insertarmos el nuevo parrafo antes del parrafo de referencia  
  document.getElementById('contenido').insertBefore(nuevo_parrafo,parrafo_ref);  
  //si ponemos [-1] en el nuevo párrafo se insertará al final  
  //si ponemos [0] en el nuevo párrafo se insertará al principio  
}

function multiplica(num1,num2) {
  let resultado = num1 * num2;
  console.log(resultado);
//  document.write(resultado);
return resultado;
}

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial,' + miNombre;
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
