import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';
import BackButton from './BackButton';
import Footer from '../Footer';
import Feedback from '../Feedback/Feedback';

const ProductSlider = React.lazy(() => import('./ProductSlider'));

export default function ProductPage({ data }) {
  const { products } = data;
  const { productURL } = useParams();
  const [productData, setProductData] = useState({});
  const [sliderData, setSliderData] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (productURL !== undefined) {
      setProductData(products[productURL]);
      setTitle(products[productURL].title);
      setSliderData(products[productURL].images);
    }
  }, [productURL]);

  return (
    <>
      <section className="product">
        <div className="container">
          <div className="row py-3">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="text-black mb-4 title-sized text-uppercase">
                {title}
              </h2>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-7 pb-3">
              <Suspense
                fallback={
                  <div className="spinner-grow text-light" role="status" />
                }
              >
                <ProductSlider images={sliderData} path={productURL} />
              </Suspense>
            </div>
            <div className="col-md-5">
              <ProductInfo data={productData} />
            </div>
          </div>
          {/* <div className="row pt-5 pb-5">
            <div className="col-lg-8 mx-auto text-center"></div>
          </div>   */}
          <BackButton />
        </div>
      </section>
      <Feedback />
      <Footer />
    </>
  );
}

ProductPage.propTypes = {
  data: PropTypes.object,
};
