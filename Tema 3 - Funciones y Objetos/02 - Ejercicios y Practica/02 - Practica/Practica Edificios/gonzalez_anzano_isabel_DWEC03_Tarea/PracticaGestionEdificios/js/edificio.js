//Objeto Edificio

//Metodo constructor:*******************************************************
//He incluido el nombre aunque no estaba solicitado, para añadir una personalización al programa
function Edificio(calle, numero, codigoPostal, nombre) {
  //propiedades:
  this.calle = calle;
  this.numero = numero;
  this.codigoPostal = codigoPostal;
  this.nombre = nombre;
  this.edificio = new Array(); //este array guardará las plantas de cada edificio y sus puertas
  respuesta = `Construido nuevo edificio ${this.nombre}, en la calle ${this.calle}, nº ${this.numero} y CP ${this.codigoPostal} <br/>`;

  //Métodos: *******************************************************
  //Como el num.de puertas es el mismo que el num.de propietarios cada vez que se crea una planta miramos si ya existe, entonces se queda igual
  // y si no existe (es decir ese valor del array es undefined) creamos dentro del array planta un nuevo array que contendrá el número de puertas/propietarios
  this.agregarPlantasYPuertas = function(numplantas, puertas, nombre) {
    if (numplantas <= 0) {
      return "<br><span style='color:red'>* No está permitido añadir un numero negativo de plantas o igual a 0</span><br />";
      // Si el número de plantas es correcto
    } else {
        this.edificio.length = numplantas + this.edificio.length; //obtenemos el valor total del numero de plantas para recorrer el array
        for (var i = 0; i < this.edificio.length; i++) {
          if (this.edificio[i] == undefined) {
            // console.log("como la planta: "+(i)+ " no está definida la creamos");
            this.edificio[i] = new Array();
            this.edificio[i].length = puertas;
            // var respuesta = "El número de plantas actual se ha modificado a: "+this.edificio.length+" y de puertas a: "+this.edificio[0].length+"<br />";
          }
          this.edificio[i].length = this.edificio[i].length;
        }
        // console.log(respuesta);
        // Mostramos un mensaje una vez creado el array informando de la creación de plantas y puertas indicados para el edificio.
        if (numplantas > 1) {
          return `Agregamos ${numplantas} plantas y ${puertas} puertas por planta al edificio ${this.nombre}...`;
        } else {
          return `Agregamos ${numplantas} planta y ${puertas} puertas por planta al edificio ${this.nombre}...`;
        }
    }
  }

  //Este metodo almacena en el array el nombre del propietario y devuelve un string que lo confirma.
  this.agregarPropietario = function(propietario, planta, puerta) {
    //Primero comprobamos que la planta y la puerta existen, porque si no es el caso se muestra un mensaje de error.
    if (planta <= this.edificio.length && puerta <= this.edificio[0].length && planta > 0 && puerta > 0) {
      // Hay que restarle 1 al valor para guardarlo porque estamos usando arrays y comienzan con índice 0
      //de esta forma se guardan comenzando en 1:
      this.edificio[planta - 1][puerta - 1] = propietario;
      //devolvemos el string confirmando que se ha guardado el propietario correctamente.
      return `<br> ** ${propietario} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.**`;
    } else {
      return `<br><span style="color:red"> * No se ha podido añadir el propietario ${propietario} pues no existe la vivienda.</span>`;
    }
  }

  //Este metodo imprime un listado con todos los propietarios con una cabecera que indica la calle y el número(respuesta)
  this.imprimePlantas = function() {
    //cabecera:
    var respuesta = `<strong>Listado de propietarios del edificio ${this.imprimeCalle()} número ${this.imprimeNumero()} </strong><br/>`;
    //recorremos la extensión del array buscando los valores con propietario para mostrarlo
    for (var i = 0; i < this.edificio.length; i++) {
      for (var y = 0; y < this.edificio[i].length; y++) {
        if (this.edificio[i][y] != undefined) {
          respuesta += `<br> ---- Propietario del piso ${(y+1)} de la planta ${(i+1)} : ${this.edificio[i][y]}.`;
        } else {
          respuesta += "<br><span style='color:grey'>-Propietario del piso " + (y + 1) + " de la planta " + (i + 1) + ": Piso vacío</span>";
        }
      }
    }
    return respuesta;
  };

  //Setters:*******************************************************
  //Actualiza el número del edificio,si no se le pasa un parámetro numérico lo actualiza a sin numero
  this.modificarNumero = function(numero) {
    if (!compruebaEntero(numero)) {
      return this.numero = "s/n";
    }
    this.numero = numero;
    return true;
  }
  //Actualiza el CP, previamente comprueba que sea un número
  this.modificarCodigoPostal = function(codigo) {
    if (!compruebaEntero(codigo)) {
      return false;
    }
    this.codigoPostal = codigo;
    return true;
  }
  //Actualiza la calle del edificio
  this.modificarCalle = function(calle) {
    this.calle = calle;
  }
  //Getters:*******************************************************
  //En funcion de un bool devuelve o una cadena con el nombre y la calle o sólo la calle, por defecto devuelve solo la calle.
  this.imprimeCalle = function(completo = false) {
    if (completo) {
      return `La calle del edificio ${this.nombre} es: ${this.calle}.`;
    } else {
      return `${this.calle}`;
    }
  }
  //En funcion de un bool devuelve o una cadena con el nombre y el numero o sólo el número de la calle, por defecto devuelve solo el numero.
  this.imprimeNumero = function(completo = false) {
    if (completo) {
      return `El edificio ${this.nombre} está situado en la calle ${this.calle} número ${this.numero}.`;
    } else {
      return `${this.numero}`;
    }
  }
  //En funcion de un bool devuelve o una cadena con el nombre y el cp o sólo el cp, por defecto devuelve solo el cp.
  this.imprimeCodigoPostal = function(completo = false) {
    if (completo) {
      return `El código postal del edificio ${this.nombre} es: ${this.codigoPostal}.`;
    } else {
      return `${this.codigoPostal}`;
    }
  }

  //Otras funciones útiles:
  //este método comprueba si un número es entero y mayor que 0,
  //devuelve true en caso afirmativo.
  function compruebaEntero(num) {
    resp = true;
    num = parseInt(num);
    if (num < 1 || isNaN(num)) {
      resp = false;
    }
    return (resp);
  }
  //imprime el texto respuesta del método constructor
  function imprime(texto) {
    document.write("<h6> -> Se llama al Método Constructor</h6>")
    document.write(texto);
    document.write("<hr/>");
  }

  imprime(respuesta);
}
