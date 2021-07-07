import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          className='home__image'
          alt=''
        />
        <div className='home__row'>
          <Product
            title='As A Man Thinketh (Pocket Classics)'
            price={39.99}
            image='https://m.media-amazon.com/images/I/41q3R6WxnFL._AC_UY327_FMwebp_QL65_.jpg'
            rating={2}
            id='12323423'
          />
          <Product
            title='The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Y-bq+NUoL._SX320_BO1,204,203,200_.jpg'
            rating={3}
            id='12432543'
          />
        </div>
        <div className='home__row'>
          <Product
            title='The Theory of Everything: The Origin and Fate of the Universe'
            price={19.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg'
            rating={4}
            id='43562734'
          />
          <Product
            title='Eating in the Age of Dieting'
            price={50.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51SWYYvk+KL._SX319_BO1,204,203,200_.jpg'
            rating={1}
            id='11243523'
          />
          <Product
            title='Ikigai: The Japanese secret to a long and happy life'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51EzfScg4OL._SX352_BO1,204,203,200_.jpg'
            rating={2}
            id='17263451'
          />
        </div>
        <div className='home__row'>
          <Product
            title='Think Like a Monk: The secret of how to harness the power of positivity and be happy now'
            price={69.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51w6EZdGCFL._SX342_BO1,204,203,200_.jpg'
            rating={5}
            id='23152434'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
