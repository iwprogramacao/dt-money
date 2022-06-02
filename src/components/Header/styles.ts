import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem; // 0px top, 16px sides, 160px bottom;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    
    background: var(--blue-light);
    border: 0;
    border-radius: .25rem;
    padding: 0 2rem;

    height: 3rem;

    transition: filter 0.3s;    /* Toda vez que a prop. "filter" for alterada, irá aplicar a transição */

    &:hover {   /* Referencia o próprio elemento + itens a seguir */
      filter: brightness(0.9)
    }
  }
`;