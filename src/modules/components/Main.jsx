import React from 'react';
import productsData from '../../data/products';
import servicesData from '../../data/services';
import factoryData from '../../data/factory';
import Header from './Header';
import Services from './Services';
import Card from './Cards/Card';
import Factory from './Factory/Factory';
import Feedback from './Feedback/Feedback';
import Footer from './Footer';

export default function Main() {
  return (
    <>
      <Header />
      <Services services={servicesData} />
      <Card data={productsData.cards} />
      <Factory data={factoryData} />
      <Feedback />
      <Footer />
    </>
  );
}
