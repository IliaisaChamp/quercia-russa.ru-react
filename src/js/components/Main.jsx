import React from 'react';
import productsData from '../data/products';
import services from '../data/services';
import Header from './Header';
import Services from './Services';
import Card from './Cards/Card';
import Factory from './Factory/Factory';

export default function Main() {
  return (
    <>
      <Header />
      <Services services={services} />
      <Card data={productsData.cards} />
      <Factory />
    </>
  );
}
