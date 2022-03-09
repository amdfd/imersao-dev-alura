function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReaisNumerico = parseFloat(valor);

  var valorEmDolares = valorEmReaisNumerico / 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A conversão em dólares é de U$" + valorEmDolares;
  elementoValorConvertido.innerHTML = valorConvertido;
}
