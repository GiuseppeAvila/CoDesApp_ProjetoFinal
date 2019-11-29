/*
  É muito importante que todo seu código fique dentro deste
  document.addEventListener, pois isso garante que ele vai
  rodar apenas quando toda a página estiver carregada. Isso
  foi explicado no Material Prévio de JavaScript da Aula 9.
*/
document.addEventListener('DOMContentLoaded', function() {

  /*
    A função coDesConnect cria uma conexão com o Firebase.
  */

  let db = coDesConnect("https://projetofinal-4ecc0.firebaseio.com/")
  /*
   CAPTURAS DOS DADOS
  */

  db.download("telainicial", function(data) {
    console.log(data)
    coDesReplace(".body-pacientes", data)
  })
})