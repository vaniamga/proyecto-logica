function eliminarRespuestas(preguntaId) {
    var pregunta = document.getElementById(preguntaId);
    var respuestasIncorrectas = pregunta.querySelectorAll("input[type='radio'][value='B'], input[type='radio'][value='C']");
    var respuestasAEliminar = 2;
  
    var posicionesAEliminar = [];
    while (posicionesAEliminar.length < respuestasAEliminar) {
      var posicionAleatoria = Math.floor(Math.random() * respuestasIncorrectas.length);
      if (posicionesAEliminar.indexOf(posicionAleatoria) === -1) {
        posicionesAEliminar.push(posicionAleatoria);
      }
    }
  
    for (var i = 0; i < posicionesAEliminar.length; i++) {
      var posicion = posicionesAEliminar[i];
      respuestasIncorrectas[posicion].style.display = "none";
    }
  }

  function eliminarRespuestas2(preguntaId) {
    var pregunta = document.getElementById(preguntaId);
    var respuestasIncorrectas = pregunta.querySelectorAll("input[type='radio'][value='B'], input[type='radio'][value='D']");
    var respuestasAEliminar = 2;
  
    var posicionesAEliminar = [];
    while (posicionesAEliminar.length < respuestasAEliminar) {
      var posicionAleatoria = Math.floor(Math.random() * respuestasIncorrectas.length);
      if (posicionesAEliminar.indexOf(posicionAleatoria) === -1) {
        posicionesAEliminar.push(posicionAleatoria);
      }
    }
  
    for (var i = 0; i < posicionesAEliminar.length; i++) {
      var posicion = posicionesAEliminar[i];
      respuestasIncorrectas[posicion].style.display = "none";
    }
  }

  function eliminarRespuestas3(preguntaId) {
    var pregunta = document.getElementById(preguntaId);
    var respuestasIncorrectas = pregunta.querySelectorAll("input[type='radio'][value='B'], input[type='radio'][value='C']");
    var respuestasAEliminar = 2;
  
    var posicionesAEliminar = [];
    while (posicionesAEliminar.length < respuestasAEliminar) {
      var posicionAleatoria = Math.floor(Math.random() * respuestasIncorrectas.length);
      if (posicionesAEliminar.indexOf(posicionAleatoria) === -1) {
        posicionesAEliminar.push(posicionAleatoria);
      }
    }
  
    for (var i = 0; i < posicionesAEliminar.length; i++) {
      var posicion = posicionesAEliminar[i];
      respuestasIncorrectas[posicion].style.display = "none";
    }
  }
function verificarRespuesta(preguntaId) {
    const pregunta = document.getElementById(preguntaId);
    const opciones = pregunta.querySelectorAll("input[type=radio]");
    let respuestaCorrecta = false;

    opciones.forEach((opcion) => {
        if (opcion.checked) {
           
            switch (preguntaId) {
                case "pregunta1":
                    respuestaCorrecta = opcion.value === "A";
                    break;
                case "pregunta2":
                    respuestaCorrecta = opcion.value === "B";
                    break;
                
                case "pregunta3":
                    respuestaCorrecta = opcion.value === "A";
                    break;
                case "pregunta4":
                    respuestaCorrecta = opcion.value === "A";
                    break;
                case "pregunta5":
                        respuestaCorrecta = opcion.value === "A";
                        break; 
                case "pregunta6":
                        respuestaCorrecta = opcion.value === "A";
                        break;
                case "pregunta7":
                        respuestaCorrecta = opcion.value === "C";
                        break;
                case "pregunta8":
                        respuestaCorrecta = opcion.value === "B";
                        break; 
                case "pregunta9":
                        respuestaCorrecta = opcion.value === "B";
                        break;
                case "pregunta10":
                        respuestaCorrecta = opcion.value === "C";
                        break;                              
                
                default:
                    respuestaCorrecta = false;
            }
        }
    });

    if (respuestaCorrecta) {
        pregunta.style.display = "none";

        // Mostrar la siguiente pregunta si existe
        const siguientePreguntaId = "pregunta" + (parseInt(preguntaId.slice(8)) + 1);
        const siguientePregunta = document.getElementById(siguientePreguntaId);
        if (siguientePregunta) {
            siguientePregunta.style.display = "block";
            
        } else {
            
            // Si no hay más preguntas, se puede mostrar un mensaje o realizar alguna acción final.
            alert("¡Felicidades! has ganado 1 millon de pesos ");
        }
    } else {
        alert("Respuesta incorrecta. Inténtalo de nuevo.");
    }
}

function utilizarComodin(){
    var respuesta = document.getElementById("respuestaIncorrecta1");
    var respuestaB = document.getElementById("respuestaB");
    respuesta.remove();
}
