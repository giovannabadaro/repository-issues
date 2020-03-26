import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//cada rota da aplicação também é um componente
// Switch --> garante que uma rota só seja chamada por vez

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />''
      </Switch>
    </BrowserRouter>
  );
}
