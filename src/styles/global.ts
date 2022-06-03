import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #ffffff;

    --red: #e52e40;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 
  Padrão de fonte = 16px (desktop);
    Utilizaremos REM como definição por padrão para mantermos as proporções de acessibilidade para usuários que precisam de um 'font-size' maior, sem que perca a estética e bagunce o display dos elementos que devem crescer ou diminuir de acordo com o tamanho da fonte padrão do browser.
    Utilizando o "%", ele irá aumentar ou diminuir de acordo com a preferencia do usuário. Se deixarmos como "px", isso não irá acontecer.
    
      REM (1rem = 16px)
  */
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px;
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; /* Chrome Engine = webkit */
  }

  body, input, textarea, button {   /* Por padrão, esses 3 elementos não importam a fonte do body, eles têm suas próprias fontes */
    font-family: 'Poppins', sans-serif;
    font-weight: 400;   /* Geralmente no HTML é 500 */
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;   
  }

  button {
    cursor: pointer;
  }

  /* Tudo o que tiver desabilitado */
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* --------------- Modal --------------- */

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    
    position: fixed;    /* Quando tiver em scroll, aparece por cima sem se mover */
    // Setup para ocupar tudo:
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // Só top e bottom: ocupa de cima a baixo somente o tamanho do conteúdo do form;

    // Centralizar o conteúdo na tela
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;    // 48px Desktop
    position: relative;   /* Para definir itens em position absolute dentro desse mesmo conteúdo e não absolute da tela inteira (botão fechar Modal) */
    border-radius: 0.25rem;
  }
`;

