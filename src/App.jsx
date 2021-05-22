import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './modules/components/Main';
import ProductPage from './modules/components/ProductPage/ProductPage';
import productsData from './data/products';
import ScrollToTop from './modules/components/ScrollToTop';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/:productURL"
            render={() => <ProductPage data={productsData} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
