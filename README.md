# Escuta Cidadã – Front-End

Este repositório contém a parte de frontend da aplicação **Escuta Cidadã** responsável pela interface web/mobile.

## Descrição

O projeto Escuta Cidadã está sendo desenvolvido para facilitar a comunicação entre a população e os órgãos responsáveis, criando um canal direto para o registro de experiências, denúncias e sugestões relacionadas à mobilidade urbana. Além disso, a aplicação busca identificar e organizar os dados de forma estruturada e com maior agilidade.
Pensada para ser acessível, intuitiva e funcional, a plataforma atenderá diretamente os usuários do transporte público. Com essas informações, espera-se contribuir para que os órgãos responsáveis possam agir de forma mais eficiente na resolução de problemas e na melhoria do serviço


## Tecnologias Utilizadas

- **JavaScript**
- **HTML5**
- **CSS**
- **Firebase Hosting**

## 🚀 O projeto já está hospedado e funcionando online

Você pode acessar a aplicação diretamente pelo link abaixo, sem necessidade de instalação local:

🔗 [Acessar Escuta Cidadã](https://escuta-cidada.web.app/)

---

## Como Rodar o Projeto Localmente

Para rodar o projeto *Escuta Cidadã* (front-end) no seu computador, siga os passos abaixo.

### 1. Clonar o Repositório

Primeiro, clone o repositório para a sua máquina local usando o Git. Abra o terminal e execute o comando:

```bash
git clone https://github.com/GuilhermeAzevedo01/Escuta-Cidada.git
```

Isso criará uma cópia local do repositório no seu computador.

### 2. Navegar até o Diretório do Projeto

Após clonar o repositório, navegue até o diretório do projeto:
```bash
cd Escuta-Cidada
```
### 3. Rodar o Projeto Localmente

O projeto é composto por arquivos estáticos (HTML, CSS, e JavaScript), então, para rodá-lo localmente, basta abrir o arquivo `index.html` diretamente no seu navegador de preferência.

Não é necessário instalar nada para rodar o front-end, pois ele é auto-contido nos arquivos do repositório.

## Fluxo de Uso do Sistema

**1. Escanear o QR Code** - O usuário escaneia o QR Code, posicionado estrategicamente nas portas dos ônibus.

**2. Acesso ao formulário** - O QR Code redireciona para uma página hospedada no Firebase, onde está o formulário online.

**3. Preenchimento das informações** - O usuário preenche o formulário com informações sobre sua experiência no transporte público.

**4. Envio dos dados** - As informações são enviadas para o backend, desenvolvido em Django (Python).

**5. Processamento e armazenamento** - O backend valida e armazena os dados no banco de dados PostgreSQL, hospedado na Render.

**6. Acesso dos gestores** - Os dados ficam disponíveis para visualização através do painel administrativo do Django, acessado por gestores via link protegido.

## Modo de Uso pelo Usuário

1. Escanear o QR Code disponibilizado nos transportes públicos

2. Acessar o formulário e preencher as informações necessárias

3. Enviar o formulário com os detalhes do relato
