const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const mensagemInput = document.getElementById("mensagem");


function validar() {
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const mensagem = mensagemInput.value.trim();


  if (nome === '' || email === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos!');
    return false;
  }

  if (nome !== '') {
    nomeInput.parentNode.classList.remove('error');
  } else {
    nomeInput.parentNode.classList.add('error');
  }

  if (email !== '') {
    emailInput.parentNode.classList.remove('error');
  } else {
    emailInput.parentNode.classList.add('error');
  }

  if (mensagem !== '') {
    mensagemInput.parentNode.classList.remove('error');
  } else {
    mensagemInput.parentNode.classList.add('error');
  }
}

