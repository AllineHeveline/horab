import React from 'react';
// Importa a biblioteca React, que é necessária para criar componentes e utilizar a sintaxe JSX.

import ReactDOM from 'react-dom/client';
// Importa o módulo `ReactDOM` que contém métodos específicos para renderizar elementos React no DOM do navegador.
// A partir da versão 18, o React usa `createRoot` para renderizar a aplicação de forma otimizada.

import App from './App';
// Importa o componente `App`, que é o componente principal da aplicação e será renderizado dentro da árvore DOM.

const root = ReactDOM.createRoot(document.getElementById('root'));
// Cria uma raiz React associada ao elemento HTML com o id `root` (definido no arquivo `index.html`).
// Esse é o ponto de montagem da aplicação React no DOM.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Renderiza o componente `App` dentro da raiz criada. O `React.StrictMode` é um wrapper que ajuda a identificar problemas potenciais no código.
// Ele ativa verificações e avisos adicionais em modo de desenvolvimento, mas não afeta o comportamento da aplicação em produção.