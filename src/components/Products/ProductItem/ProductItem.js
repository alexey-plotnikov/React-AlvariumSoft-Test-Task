import React from "react";

import { FiltrationPanelConstants, ProductItemValues } from "common/constants";
import "./ProductItem.scss";

const ProductItemComponent = (props) => {
  const { currentCurrency, name, price, image, description } = props;

  return (
    <div className="product-item-component">
      <div className="product-item-image">
        <img
          className="image"
          src={process.env.PUBLIC_URL + ProductItemValues.ASSETS + image}
          alt=""
        />
      </div>
      <div className="product-item-information">
        <p className="product-item-name">{name}</p>
        <p className="product-item-price">
          {price + " " + currentCurrency}
        </p>
        <div className="product-item-description">{description}</div>
      </div>
    </div>
  );
};

export default ProductItemComponent;
