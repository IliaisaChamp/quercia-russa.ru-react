import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/Footer';
import Feedback from './components/Feedback/Feedback';
import productsData from './data/products';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
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
      <Feedback />
      <Footer />
    </Router>
  );
}

export default App;
