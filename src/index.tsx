import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({  // Chamando a função importada
  models: {
    transaction: Model,  // nome da entidade: tipagem
  },

  seeds(server) {
    server.db.loadData({
      transactions: [    // sempre é o nome do Model no plural, devolvendo as transactions q queremos criar
        {
          id: 1,    // Sempre deve ter id numérico e auto-incremental
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6500,
          createdAt: new Date('2022-02-12 09:15:22')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1120,
          createdAt: new Date('2022-02-14 11:00:00')
        }
      ],
    })
  },

  routes() {    // Quais são as rotas da API fictícia
    this.namespace = 'api'    // Lá na chamada tem a rota "/api/" então todas as chamadas que fizermos será a partir desse endereço

    // Requisições do tipo GET (busca, listagem, exibir algum item) - não precisa da "/api/" pois já está estabelecido acima
    // Após o endereço, estabelecer seu retorno com a arrow function
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    // Recebe os dados da function 'NewTransactionModal'
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
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
