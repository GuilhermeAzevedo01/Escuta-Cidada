// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {

  // Seleciona o input do telefone pelo seu id
  const telefoneInput = document.getElementById('telefone');

  // Adiciona um listener que dispara toda vez que o usuário digita algo no input telefone
  telefoneInput.addEventListener('input', function (e) {
    // Pega o valor atual digitado no input
    let valor = e.target.value;
    
    // Remove todos os caracteres que não sejam números (remove parênteses, espaços, traços, letras etc)
    valor = valor.replace(/\D/g, '');

    // Limita o tamanho máximo do número para 11 dígitos (DDD + número de telefone)
    if (valor.length > 11) valor = valor.slice(0, 11);

    // Se tiver pelo menos um dígito, adiciona um parêntese abrindo '(' no início
    if (valor.length > 0) valor = '(' + valor;

    // Se já tem o parêntese aberto e pelo menos dois números (DDD), fecha o parêntese e adiciona um espaço depois
    if (valor.length > 3) valor = valor.slice(0, 3) + ') ' + valor.slice(3);

    // Atualiza o valor do input com a formatação aplicada
    e.target.value = valor;
  });
  

  // Seleciona o formulário pelo id 'feedback' e adiciona um evento ao enviar o formulário
  document.getElementById('feedback').addEventListener('submit', async function (e) {
    // Evita o envio padrão do formulário (para evitar recarregar a página)
    e.preventDefault();

    // Cria um objeto com todos os dados capturados dos inputs do formulário
    const data = {
      nome: document.getElementById('nome').value,                  // valor do input nome
      email: document.getElementById('email').value,                // valor do input email
      genero: document.getElementById("genero").value,              // valor do select genero
      idade: document.getElementById("idade").value,                // valor do select idade
      telefone: document.getElementById('telefone').value,          // valor do input telefone
      empresa: document.getElementById('empresa').value,            // valor do input empresa
      linha: document.getElementById('linha').value,                // valor do input linha
      horario: document.getElementById('horario').value,            // valor do input horario
      data: document.getElementById('data').value,                  // valor do input data
      mensagem: document.getElementById('mensagem').value,          // valor do textarea mensagem
      
      // Pega o valor do input do tipo radio que estiver selecionado no grupo 'avtrasnport', ou null se nenhum selecionado
      avtransport: document.querySelector('input[name="avtrasnport"]:checked')?.value || null,
      
      // Pega o valor do input do tipo radio que estiver selecionado no grupo 'avsite', ou null se nenhum selecionado
      avsite: document.querySelector('input[name="avsite"]:checked')?.value || null,
    };


     // Seleciona o elemento que exibe a mensagem de erro do campo "nome"
      const erroNome = document.getElementById("erro-nome");

      // Antes de validar, remove possíveis mensagens de erro antigas
      nome.classList.remove("erro-input");         // Remove a borda vermelha, se existir
      erroNome.style.display = "none";             // Esconde a mensagem de erro, se estiver visível

      // Verifica se o campo "nome" está vazio
      if (nome.value.trim() === "") {
        e.preventDefault();                        // Impede o envio do formulário
        nome.classList.add("erro-input");          // Adiciona a borda vermelha ao input
        erroNome.style.display = "block";          // Exibe a mensagem de erro acima do campo
        temErro = true;                            // Marca que há erro no formulário
      }

      // Quando o usuário começar a digitar no input "nome"
      nome.addEventListener("input", function () {
        nome.classList.remove("erro-input");       // Remove a borda vermelha
        erroNome.style.display = "none";           // Esconde a mensagem de erro
      });



       const erroEmail = document.getElementById("erro-email");

      // Antes de validar, remove possíveis mensagens de erro antigas
      email.classList.remove("erro-input");         // Remove a borda vermelha, se existir
      erroEmail.style.display = "none";             // Esconde a mensagem de erro, se estiver visível

      // Verifica se o campo "nome" está vazio
      if (email.value.trim() === "") {
        e.preventDefault();                        // Impede o envio do formulário
        email.classList.add("erro-input");          // Adiciona a borda vermelha ao input
        erroEmail.style.display = "block";          // Exibe a mensagem de erro acima do campo
        temErro = true;                            // Marca que há erro no formulário
      }

      // Quando o usuário começar a digitar no input "nome"
      email.addEventListener("input", function () {
      email.classList.remove("erro-input");       // Remove a borda vermelha
      erroEmail.style.display = "none";           // Esconde a mensagem de erro
      });



      const erroGenero = document.getElementById("erro-genero");

      // Antes de validar, remove possíveis mensagens de erro antigas
      genero.classList.remove("erro-input");         // Remove a borda vermelha, se existir
      erroGenero.style.display = "none";             // Esconde a mensagem de erro, se estiver visível

      // Verifica se o campo "nome" está vazio
      if (genero.value.trim() === "") {
        e.preventDefault();                        // Impede o envio do formulário
        genero.classList.add("erro-input");          // Adiciona a borda vermelha ao input
        erroGenero.style.display = "block";          // Exibe a mensagem de erro acima do campo
        temErro = true;                            // Marca que há erro no formulário
      }

      // Quando o usuário começar a digitar no input "nome"
      genero.addEventListener("input", function () {
      genero.classList.remove("erro-input");       // Remove a borda vermelha
      erroGenero.style.display = "none";           // Esconde a mensagem de erro
      });



      const erroIdade = document.getElementById("erro-idade");

      // Antes de validar, remove possíveis mensagens de erro antigas
      idade.classList.remove("erro-input");         // Remove a borda vermelha, se existir
      erroIdade.style.display = "none";             // Esconde a mensagem de erro, se estiver visível

      // Verifica se o campo "nome" está vazio
      if (idade.value.trim() === "") {
        e.preventDefault();                        // Impede o envio do formulário
        idade.classList.add("erro-input");          // Adiciona a borda vermelha ao input
        erroIdade.style.display = "block";          // Exibe a mensagem de erro acima do campo
        temErro = true;                            // Marca que há erro no formulário
      }

      // Quando o usuário começar a digitar no input "nome"
      idade.addEventListener("input", function () {
      idade.classList.remove("erro-input");       // Remove a borda vermelha
      erroIdade.style.display = "none";           // Esconde a mensagem de erro
      });



      const erroTelefone = document.getElementById("erro-telefone");

      // Antes de validar, remove possíveis mensagens de erro antigas
      telefone.classList.remove("erro-input");         // Remove a borda vermelha, se existir
      erroTelefone.style.display = "none";             // Esconde a mensagem de erro, se estiver visível

      // Verifica se o campo "nome" está vazio
      if (telefone.value.trim() === "") {
        e.preventDefault();                        // Impede o envio do formulário
        telefone.classList.add("erro-input");          // Adiciona a borda vermelha ao input
        erroTelefone.style.display = "block";          // Exibe a mensagem de erro acima do campo
        temErro = true;                            // Marca que há erro no formulário
      }

      // Quando o usuário começar a digitar no input "nome"
      telefone.addEventListener("input", function () {
      telefone.classList.remove("erro-input");       // Remove a borda vermelha
      erroTelefone.style.display = "none";           // Esconde a mensagem de erro
      });



      const erroEmpresa = document.getElementById("erro-empresa");

      // Antes de validar, remove possíveis mensagens de erro antigas
      empresa.classList.remove("erro-input");         // Remove a borda vermelha, se existir
      erroEmpresa.style.display = "none";             // Esconde a mensagem de erro, se estiver visível

      // Verifica se o campo "nome" está vazio
      if (empresa.value.trim() === "") {
        e.preventDefault();                        // Impede o envio do formulário
        empresa.classList.add("erro-input");          // Adiciona a borda vermelha ao input
        erroEmpresa.style.display = "block";          // Exibe a mensagem de erro acima do campo
        temErro = true;                            // Marca que há erro no formulário
      }

      // Quando o usuário começar a digitar no input "nome"
      empresa.addEventListener("input", function () {
      empresa.classList.remove("erro-input");       // Remove a borda vermelha
      erroEmpresa.style.display = "none";           // Esconde a mensagem de erro
      });



    const erroLinha = document.getElementById("erro-linha");

      // Antes de validar, remove possíveis mensagens de erro antigas
      linha.classList.remove("erro-input");         // Remove a borda vermelha, se existir
      erroLinha.style.display = "none";             // Esconde a mensagem de erro, se estiver visível

      // Verifica se o campo "nome" está vazio
      if (linha.value.trim() === "") {
        e.preventDefault();                        // Impede o envio do formulário
        linha.classList.add("erro-input");          // Adiciona a borda vermelha ao input
        erroLinha.style.display = "block";          // Exibe a mensagem de erro acima do campo
        temErro = true;                            // Marca que há erro no formulário
      }

      // Quando o usuário começar a digitar no input "nome"
      linha.addEventListener("input", function () {
      linha.classList.remove("erro-input");       // Remove a borda vermelha
      erroLinha.style.display = "none";           // Esconde a mensagem de erro
      });



      const erroHorario = document.getElementById("erro-horario");

      // Antes de validar, remove possíveis mensagens de erro antigas
      horario.classList.remove("erro-input");         // Remove a borda vermelha, se existir
      erroHorario.style.display = "none";             // Esconde a mensagem de erro, se estiver visível

      // Verifica se o campo "nome" está vazio
      if (horario.value.trim() === "") {
        e.preventDefault();                        // Impede o envio do formulário
        horario.classList.add("erro-input");          // Adiciona a borda vermelha ao input
        erroHorario.style.display = "block";          // Exibe a mensagem de erro acima do campo
        temErro = true;                            // Marca que há erro no formulário
      }

      // Quando o usuário começar a digitar no input "nome"
      horario.addEventListener("input", function () {
      horario.classList.remove("erro-input");       // Remove a borda vermelha
      erroHorario.style.display = "none";           // Esconde a mensagem de erro
      });



      
      const erroMensagem= document.getElementById("erro-mensagem");

      // Antes de validar, remove possíveis mensagens de erro antigas
      mensagem.classList.remove("erro-input");         // Remove a borda vermelha, se existir
      erroMensagem.style.display = "none";             // Esconde a mensagem de erro, se estiver visível

      // Verifica se o campo "nome" está vazio
      if (mensagem.value.trim() === "") {
        e.preventDefault();                        // Impede o envio do formulário
        mensagem.classList.add("erro-input");          // Adiciona a borda vermelha ao input
        erroMensagem.style.display = "block";          // Exibe a mensagem de erro acima do campo
        temErro = true;                            // Marca que há erro no formulário
      }

      // Quando o usuário começar a digitar no input "nome"
      mensagem.addEventListener("input", function () {
      mensagem.classList.remove("erro-input");       // Remove a borda vermelha
      erroMensagem.style.display = "none";           // Esconde a mensagem de erro
      });




    try {
      // Envia os dados para a API via método POST, convertendo o objeto data para JSON
      const response = await fetch("https://escuta-cidada-back.onrender.com/api/feedback/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Especifica que o corpo da requisição está em JSON
        },
        body: JSON.stringify(data) // Transforma o objeto data em string JSON
      });

      // Se a resposta da API for sucesso (status 200-299)
      if (response.ok) {
        alert("Obrigado pela sua contribuição!");  // Mostra mensagem de sucesso para o usuário
        document.getElementById("feedback").reset();  // Limpa o formulário para novos dados
      } else {
        alert("Erro ao enviar feedback.");  // Mostra mensagem de erro se resposta da API não for ok
      }
    } catch (error) {
      // Caso haja algum erro na comunicação com o servidor (ex.: servidor offline)
      alert("Erro de conexão com o servidor.");
      console.error(error); // Exibe o erro no console do navegador para debug
    }
  });

});
