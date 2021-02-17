import React from "react";

import { FiltrationPanelConstants, ProductItemValues } from "common/constants";
import "./ProductItem.scss";

const ProductItemComponent = (props) => {
  const { currentCurrency, name, price, image, description } = props;

  const currencyChange = (price) => {
    if (currentCurrency === FiltrationPanelConstants.USD) {
      price = price * ProductItemValues.USD_CURRENCY;
      return price.toFixed(2);
    } else return price;
  }

  return (
    <div className="product-item-component">
      <div className="product-item-image"></div>
      <div className="product-item-information">
        <p className="product-item-name">{name}</p>
        <p className="product-item-price">{currencyChange(price) + " " + currentCurrency}</p>
        {/* <div className="product-item-description">{description}</div> */}
      </div>
    </div>
  );
};

export default ProductItemComponent;
