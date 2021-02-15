import React from "react";

import ProductItemComponent from "components/Products/ProductItem/ProductItem";
import "./Products.scss";

const ProductsComponent = (props) => {
  const {} = props;

  return (
    <div className="products-component">
      PRODUCTS COMPONENT WORKS
      <ProductItemComponent />
    </div>
  );
};

export default ProductsComponent;
