import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer } from 'miragejs'

createServer({  // Chamando a função importada 
  routes() {    // Quais são as rotas da API fictícia
    this.namespace = 'api'    // Lá na chamada tem a rota "/api/" então todas as chamadas que fizermos será a partir desse endereço

    // Requisições do tipo GET (busca, listagem, exibir algum item) - não precisa da "/api/" pois já está estabelecido acima
    // Após o endereço, estabelecer seu retorno com a arrow function
    this.get('/transactions', () => {
      return [{
        id: 1,
        title: 'Transaction 1',
        amount: 400,
        type: 'deposit',
        category: 'Food',
        createdAt: new Date()
      }]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
