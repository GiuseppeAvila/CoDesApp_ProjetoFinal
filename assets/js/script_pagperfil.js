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
  let perfil;

  if (parametros.hasOwnProperty("perfil")) {
    perfil = parametros["perfil"]
  }

  /*
   Muda os valores dentro do html.
  */

  db.download("/telainicial", function(data) {

    /*
      Verifica se a data contem a categoria em questão
    */

    if (!data.hasOwnProperty(perfil)) {
      console.log("Erro -> Perfil não idendificada");
      
      categoria = "perfil"
    }
    categoria = categoria.toLowerCase()

    /*
      Muda o titulo da pagina
    */

    window.document.title = categoria.charAt(0).toUpperCase() + categoria.slice(1)

    coDesReplace(".body-perfil", data)


    document.body.innerHTML = document.body.innerHTML.replace(/qual_categoria/g, categoria)
  })
})