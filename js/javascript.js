function convertir(){
  var numero1 = parseInt(document.getElementById("numero1").value);
  var resultado;
  var opcion = parseInt(document.getElementById("opciones").value);

  if (validar(numero1)==true) {
    switch(opcion){
      case 0:
      alert("Por favor Elija una Opcion");
      document.getElementById("resultado").value="";
      document.getElementById("numero1").value="";
      break;
      // Celcius a Kelvin
      case 1:
      resultado = numero1 + 273.15;
      break;
      //Celcius a Fahrenheit
      case 2:
      resultado = numero1 * (1.8)+32;
      break;
      //Fahrenheit a Celcius
      case 3:
      resultado = ((numero1-32)*5)/9;
      break;
      //Fahrenheit a Kelvin
      case 4:
      resultado = ((((numero1-32)*5))/9)+273.15;
      break;
      //Kelvin a Celcius
      case 5:
      resultado = numero1-273.15;
      break;
      //Kelvin a Fahrenheit
      case 6:
      resultado = ((((numero1-273.15)*9))/5)+32;
      break;
    }
    document.getElementById("resultado").value = resultado;
  }else{
    alert("Debe ingresar un numero");
    document.getElementById("opciones").selectedIndex = "0";
    document.getElementById("numero1").value="";
  }
}
//Funcion para validar numero
function validar(num1){
  if (isNaN(num1)) {
    return false;
  }else{
    return true;
  }
}
