function CallMenu() {
    let nro_ejercicio = parseInt(
      prompt(
        "ingrese el numero de ejericio que quiere ejecutar : \r\n 1.suma.\r\n 2.Promedio de examanes.\r\n 3.calcular Area Rectangulo.\r\n 4.calcular Area Triangulo.\r\n 5.calcular Area Circunferencia.\r\n 6.calcular Sueldo.\r\n 7.calcular Pulgadas.\r\n 8.calcular Dolar."
      )
    );
    if (isNaN(nro_ejercicio)) {
      alert("el campo esta vacio");
    } else {
      MenuEjercicios(nro_ejercicio);
    }
  }
  
  // funcion de contenido variables y argumentos
  function MenuEjercicios(nro_ejercicio) {
    switch (nro_ejercicio) {
      case 1:
        let valor1 = parseInt(prompt("ingresa el valor 1"));
        let valor2 = parseInt(prompt("ingresa el valor 2"));
        alert(ej1_sumarValores(valor1, valor2));
        break;
  
      case 2:
        let ex1 = parseInt(prompt("ingrese nota1: "));
        let ex2 = parseInt(prompt("ingrese nota2 "));
        let ex3 = parseInt(prompt("ingrese nota3: "));
        let ex4 = parseInt(prompt("ingrese nota4: "));
        alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4));
        break;

      case 3:
        let b = parseInt(prompt("ingrese la base: "));
        let a = parseInt(prompt("ingrese la altura: "));
        alert(ej3_calcularAreaRect(b,a));
        break;

      case 4:
        let bt = parseInt(prompt("ingrese la base: "));
        let at = parseInt(prompt("ingrese la altura: "));
        alert(ej4_calcularAreaTriangulo(bt,at));
        break;

      case 5:
        let radio = parseInt(prompt("ingrese el radio: "));
        alert(ej5_calcularAreaCircunferencia(radio));  
        break;

      case 6:
        let horas = parseInt(prompt("ingrese el total de horas trabajadas: "));
        let salarioHora = parseInt(prompt("ingrese el valor de la hora: "));
        alert(ej6_calcularAreaCircunferencia(horas, salarioHora));         
        break;

      case 7:
        let metros = parseInt(prompt("ingrese los metros de tela: "));
        alert(ej7_calcularPulgadas(metros)); 
        break;

      case 8:
        let soles = parseInt(prompt("ingrese la cantidad en soles: "));
        alert(ej8_calcularDolares(soles));          
        break;
    }
  }
  
  // funciones ejcutoras
  function ej1_sumarValores(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return "oye! ingresa datos";
    } else {
      return a + b;
    }
  }
  
  function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
    if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
      return "oye! ingresa datos";
    } else {
      return (ex1 + ex2 + ex3 + ex4) / 4;
    }
  }

  function ej3_calcularAreaRect(b, a) {
    if(isNaN(b) || isNaN(a)){
        return "Ingresa datos";
    }else {
        return (a*b);
    }
  }

  function ej4_calcularAreaTriangulo(bt,at) {
    if(isNaN(bt) || isNaN(at)){
        return "Ingresa datos";
    }else {
        return (at*bt)/2;
    }
  }

  function ej5_calcularAreaCircunferencia(radio) {
    if(isNaN(radio)){
        return "Ingresa el radio";
    }else {
        return 3.1416*radio*radio;
    }
  }

  function ej6_calcularAreaCircunferencia(horas,salarioHora) {
    if(isNaN(horas) || isNaN(salarioHora)){
        return "Ingresa los datos";
    }else {
        return horas*salarioHora;
    }
  }

  function ej7_calcularPulgadas(metros){
    if(isNaN(metros) ){
        return "Ingresa los datos";
    }else {
        return  metros/0.0254;
    }
  }

  function ej8_calcularDolares(soles){
    if(isNaN(soles) ){
        return "Ingresa los datos";
    }else {
        return soles/3.6;
    }
  }