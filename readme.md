# Contador Interativo

## 📌 Sobre o Projeto
Esta é uma aplicação web simples que funciona como um contador numérico interativo. O projeto foi desenvolvido com tecnologias web nativas e permite ao usuário aumentar ou diminuir um valor numérico exibido na tela. Além da contagem, a aplicação possui um sistema integrado de alternância de tema (Light/Dark mode) para melhorar a acessibilidade e a experiência do usuário.

## 🚀 Funcionalidades
- **Contador Numérico:** Botões intuitivos para avançar (incrementar) ou retroceder (decrementar) o valor atual.
- **Alternância de Tema (Dark/Light Mode):** Um botão dedicado que troca as cores da interface entre um tema claro e um escuro.
- **Feedback Visual Dinâmico:** O ícone do botão de tema muda automaticamente (de uma lua para um sol, e vice-versa) para refletir o modo visual ativo no momento.

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Estruturação semântica da página.
- **CSS3:** Estilização com Flexbox para alinhamento e uso de variáveis (`:root` e atributos `data-theme`) para o gerenciamento dinâmico das cores dos temas.
- **JavaScript (Vanilla):** Lógica de incremento/decremento matemático e manipulação do DOM (Document Object Model) para atualizar a interface e gerenciar o tema.
- **Ionicons:** Biblioteca externa utilizada para renderizar os ícones da interface (setas de navegação e ícones de sol/lua).

## 💻 Como executar o projeto
1. Baixe ou clone os arquivos do projeto.
2. Certifique-se de que os arquivos estejam organizados na seguinte estrutura de diretórios:
   ```text
   📁 raiz
   ├── 📄 index.html
   ├── 📁 style
   │   ├── 📄 style.css
   │   └── 📄 theme.css
   └── 📁 script
       └── 📄 script.js