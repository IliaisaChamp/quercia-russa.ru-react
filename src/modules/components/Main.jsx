import React, { Suspense } from 'react';
import productsData from '../../data/products';
import servicesData from '../../data/services';
import factoryData from '../../data/factory';
import Header from './Header';
import Services from './Services';
import Factory from './Factory/Factory';
import Feedback from './Feedback/Feedback';
import Footer from './Footer';
import Spinner from './Spinner';

const Card = React.lazy(() => import('./Cards/Card'));

export default function Main() {
  return (
    <>
      <Header />
      <Services services={servicesData} />
      <Suspense fallback={<Spinner />}>
        <Card data={productsData.cards} />
      </Suspense>
      <Factory data={factoryData} />
      <Feedback />
      <Footer />
    </>
  );
}
