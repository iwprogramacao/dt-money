import styled from "styled-components";

export const Container = styled.div`
  display: grid;    /* 3 itens do mesmo tamanho, um do lado do outro */
  grid-template-columns: repeat(3, 1fr);    /* 3 colunas, de 1 tamanho igual */
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;    /* 1.5 top and bottom, 2 laterals */
    border-radius: 0.25rem;
    color: var(--tex-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {    /* Por padrão, o "strong" vem com display: inline; então o margin-top não funciona */
      display: block;
      margin-top: 1rem;

      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {    /* Podemos utilizar classes mesmo com o Styled Components */
      background: var(--green);
      color: #fff
    }
  }
`;