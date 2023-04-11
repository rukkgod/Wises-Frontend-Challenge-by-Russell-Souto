const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const mensagemInput = document.getElementById("mensagem");


function validar() 
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const mensagem = mensagemInput.value.trim();


  if (nome === '' || email === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos!');
    return false;
  }

  