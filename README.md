# Escuta Cidadã – Front-End

Este repositório contém a parte de frontend da aplicação **Escuta Cidadã** responsável pela interface web/mobile.

## Tecnologias Utilizadas

- **JavaScript**
- **HTML5**
- **CSS**
- **Firebase Hosting**

## Funcionalidades do Front-End

- Interface acessível e responsiva para diferentes dispositivos
- Formulário para envio de relatos
- Exibição de mensagens de confirmação e erro para o usuário

## Equipe Responsável

- Akyles – Scrum Master
- Guilherme Azevedo – Full Stack
- Guilherme Henrique – Front-End e Prototipação
- Vitor Gabriel – Testes de Software
- Natasha Teixeira – Documentação e UX/UI

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
