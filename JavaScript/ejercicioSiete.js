let numero = parseInt(prompt("Digite un numero"));
if (numero % 11 === 0 && numero % 5 === 0) {
  alert(`El numero ${numero} es divisible por 11 y por 5`);
}else{
    alert(`El numero ${numero} no es divisible por 11 y por 5`);
}