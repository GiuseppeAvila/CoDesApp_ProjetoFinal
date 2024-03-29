/*
  É muito importante que todo seu código fique dentro deste
  document.addEventListener, pois isso garante que ele vai
  rodar apenas quando toda a página estiver carregada. Isso
  foi explicado no Material Prévio de JavaScript da Aula 9.
*/
document.addEventListener('DOMContentLoaded', function() {

  /*
    Cria uma conexão com o Firebase.
  */

  let db = coDesConnect("https://projetofinal-4ecc0.firebaseio.com/")

  /*
    Captura os parametros enviados para a pagina
  */

  let parametros = coDesExtract()
 
  /*
    Define a categoria da paginas
  */
  let categoria;

  if (parametros.hasOwnProperty("categoria")) {
    categoria = parametros["categoria"]
  }

  /*
   Muda os valores dentro do html.
  */

  db.download("telainicial", function(data) {

    /*
      Verifica se a data contem a categoria em questão
    */

    if (!data.hasOwnProperty(categoria)) {
      console.log("Erro -> Perfil não idendificada");
      
      categoria = "andre_dos_santos"
    }
    categoria = categoria.toLowerCase()

    /*
      Muda o titulo da pagina
    */

    window.document.title = categoria.charAt(0).toUpperCase() + categoria.slice(1)
    console.log(data[categoria])
    coDesReplace(".body-perfil", data[categoria])
  })
})