# Ozymandias | Agência de Marketing de Influência

Site institucional moderno e responsivo desenvolvido para uma agência de marketing de influência, focado em alta performance, design imersivo em modo escuro (Dark Mode) com efeitos de *glow* e um **painel administrativo dinâmico** para gestão de conteúdos.

---

## Funcionalidades

* **Design Moderno e Responsivo:** Layout adaptável para dispositivos móveis, tablets e computadores, com efeitos visuais em *Glassmorphism* e iluminação em neon.
* **Navegação Fluida (Smooth Scroll):** Menu fixo com transição suave entre as seções (Início, Quem Somos, Serviços e Contato).
* **Painel Administrativo Restrito (`admin.html`):** Área de login exclusiva para gestores atualizarem o site.
* **Gestão de Colabs em Tempo Real:** Publicação e remoção de cases de sucesso (*Colabs*) utilizando `localStorage` do navegador.
* **Botão Flutuante do WhatsApp:** Atalho integrado para atendimento rápido.

---

## Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web modernas, sem dependência de frameworks pesados:

* **HTML5:** Estruturação semântica da página e dos formulários.
* **CSS3:** Estilização avançada, variáveis customizadas, flexbox/grid e efeitos visuais dinâmicos.
* **JavaScript (ES6+):** Lógica de manipulação do DOM, autenticação simulada e persistência de dados no `localStorage`.
* **Font Awesome:** Ícones vetoriais para redes sociais e interface.
* **Google Fonts (Inter):** Tipografia limpa e profissional.

---

## Prévia

<img width="1920" height="4832" alt="screencapture-127-0-0-1-5500-index-html-2026-11-01-19_19_40" src="https://github.com/user-attachments/assets/558ab16f-2e71-4a9b-9f25-be599bbeb8b4" />


## Estrutura de Arquivos

```text
/
├── index.html       # Página principal do site
├── style.css        # Folha de estilos global e responsiva
├── script.js        # Lógica principal da home e carregamento dinâmico
├── login.html       # Tela de acesso restrito ao painel
├── admin-login.js   # Gerenciamento do login e acesso restrito ao administrador com a senha
├── admin.html       # Painel administrativo para gestão de colabs


└── admin.js         # Lógica de autenticação e manipulação de dados do admin

