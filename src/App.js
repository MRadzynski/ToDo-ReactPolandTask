import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <Switch>
          <Route exact path='/' render={()=><h1>There will be homepage</h1>}/>

          <Route exact path='/list' render={()=><h1>There will be all todo page</h1>} />
          
          <Route exact path='/list/:id' render={()=><h1>There will todo preview page</h1>} />
          
          <Route path='/list/:id/edit' render={()=><h1>There will todo edit page</h1>} />
          
          <Route exact path='/settings' render={()=><h1>There will be settings page</h1>} />
          
          <Route render={()=><h1>There will be 404 page</h1>} />
        </Switch>
    </>
  )
};

export default App;
