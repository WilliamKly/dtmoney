import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model} from 'miragejs';
import {App} from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freenlancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-09-06 09:25:12')
        },
        {
          id: 2,
          title: 'Camisa do Corinthians',
          type: 'withdraw',
          category: 'Compras',
          amount: 250,
          createdAt: new Date('2022-12-06 09:25:12')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
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
