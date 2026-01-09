# 🏛️ Landing Page - Arquiteto & Designer de Interiores

Uma Landing Page moderna, responsiva e de alta conversão desenvolvida para profissionais de Arquitetura e Design de Interiores. Este projeto foi criado como um modelo para apresentação de portfólio, serviços e captação de clientes de um serviço freelancer que realizei.

**Link para visualização:** [Preview do Projeto](https://dioser-arquiteto.vercel.app/)

![Preview do Projeto](img/site-demo.jpg)

## 🚀 Tecnologias Utilizadas

Este projeto combina a simplicidade do HTML estático com o poder do TypeScript e utilitários modernos de estilização.

-   **HTML5 Semântico**: Estrutura otimizada e acessível.
-   **Tailwind CSS (CDN)**: Estilização rápida e responsiva utilizando classes utilitárias.
-   **TypeScript**: Lógica dinâmica para cálculo de tempo de experiência e configurações de tema.
-   **CSS3 Avançado**: Animações personalizadas (Keyframes), Efeito Parallax e 3D Flip Cards.
-   **Bootstrap Icons & FontAwesome**: Ícones vetoriais.

## ✨ Funcionalidades

-   **Hero Section com Parallax**: Efeito de profundidade na imagem de fundo e sobreposição de vidro (*Glassmorphism*).
-   **Contador de Experiência Dinâmico**: Script em TypeScript que calcula automaticamente os "Anos de Experiência" com base no ano atual, sem precisar atualizar o código anualmente.
-   **Cards de Serviços 3D**: Efeito interativo de "Flip" (girar) ao passar o mouse para revelar detalhes do serviço.
-   **Vídeo Ambient**: Seção de vídeo em loop, autoplay e mudo, otimizada para não interferir na navegação (mobile-friendly).
-   **Design Totalmente Responsivo**: Layout fluido que se adapta de celulares a telas largas.
-   **Animações de Entrada**: Elementos surgem suavemente na tela (`Fade-in Up`) ao carregar.

## 📂 Estrutura do Projeto

A organização das pastas segue um padrão limpo para separar a lógica (TypeScript) do código compilado (JavaScript).

```text
/
├── css/
│   └── style.css        # Animações personalizadas e resets globais
├── img/                 # Imagens e vídeos do projeto
├── js/                  # Arquivos JavaScript compilados (NÃO EDITAR DIRETAMENTE)
│   └── config.js
├── src/                 # Código Fonte TypeScript (EDITAR AQUI)
│   └── config.ts
├── index.html           # Arquivo principal
├── package.json         # Dependências (TypeScript)
└── tsconfig.json        # Configuração do compilador TS
```

## 🛠️ Como Executar e Editar

### Pré-requisitos
Você precisará do [Node.js](https://nodejs.org/) instalado para gerenciar o compilador do TypeScript.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://seu-usuario/seu-repositorio.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Compilando o TypeScript:**
    O navegador não lê arquivos `.ts`. Se você alterar algo na pasta `src/`, precisa rodar o comando abaixo para gerar o JavaScript final na pasta `js/`:
    ```bash
    npx tsc
    ```
    *Dica: Use `npx tsc -w` para deixar o compilador rodando automaticamente enquanto você edita.*

4.  **Rodando o projeto:**
    Basta abrir o arquivo `index.html` em qualquer navegador moderno. Para uma melhor experiência de desenvolvimento, recomendo usar a extensão **Live Server** do VS Code.

## ⚙️ Customização

### Alterar Anos de Experiência
Para mudar a data de início da carreira (usada no cálculo automático), edite o arquivo `src/config.ts`:

```typescript
// src/config.ts
const ANO_INICIO_CARREIRA = 2021; // Altere para o ano desejado