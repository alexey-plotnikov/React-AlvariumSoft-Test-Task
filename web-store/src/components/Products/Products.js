import React from "react";

import ProductItemComponent from "components/Products/ProductItem/ProductItem";
import "./Products.scss";

const ProductsComponent = (props) => {
  const { currentCurrency, filtredProducts } = props;

  return (
    <div className="products-component">
      {filtredProducts.map(({ id, name, price, image, description }) => (
        <div className="test" key={id}>
          <ProductItemComponent
            currentCurrency={currentCurrency}
            name={name}
            price={price}
            image={image}
            description={description}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsComponent;
