import React, { useEffect, useState } from 'react';
import './App.scss';

import ProductCardsComponents from './components/ProductCardsComponents/ProductCardsComponents';

const App = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllProducts();
	},[])

  const getAllProducts = () => {
    fetch("http://localhost:3002/products")
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setProductList(data.productList || []);
      })
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <a href="/">Logo</a>

          <nav> 
            <ul className="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <body>
        <section className="container">
          <h1>Section with FlexBox</h1>

          <ul className="flex">
            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>
          </ul>
        </section>



        <section className="container">
          <h1>Section with Grid</h1>

          <ul className="grid">
            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li>
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>

            <li className="advertising">
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>
          </ul>
        </section>



        <section className="container">
          <h1>Section with Grid 2</h1>

          <div className="grid-2">
            <div className="preview">
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </div>

            <ul className="sidebar">
              <li>
                <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
                <span>Mufasa</span>
              </li>
              <li>
                <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
                <span>Mufasa</span>
              </li>
              <li>
                <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
                <span>Mufasa</span>
              </li>
              <li>
                <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
                <span>Mufasa</span>
              </li>
              <li>
                <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
                <span>Mufasa</span>
              </li>
              <li>
                <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
                <span>Mufasa</span>
              </li>
              <li>
                <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
                <span>Mufasa</span>
              </li>
            </ul>
          </div>
        </section>



        <section className="container">
          <h1>Section with Grid 3</h1>

          
          <ul className="grid-3">
            <li className="grid-item">
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>
            <li className="grid-item">
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>
            <li className="grid-item">
              <img src="http://tiny.cc/6505kz" alt="cena de Rei leão O filme, Mufasa em cima da pedra do rei" />
              <span>Mufasa</span>
            </li>
          </ul>
        </section>



        <section className="container">
          <h1>Section dynamic content</h1>

          <ul className="grid-4">
            {
              productList.map((product, idx) => {
                return (
                  <li>
                    <ProductCardsComponents product={product} key={`product-card-${idx}`} />
                  </li>
                )
              })
            }
          </ul>
        </section>
      </body>
    </>
  );
}

export default App;