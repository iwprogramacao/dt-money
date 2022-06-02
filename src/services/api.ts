import axios from 'axios';

export const api = axios.create({    // Criando uma instancia - padronização de todas requisições que faremos
  baseURL: 'http://localhost:3000/api/'
})