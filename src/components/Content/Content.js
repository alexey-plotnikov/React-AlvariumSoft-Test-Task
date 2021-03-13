import React from "react";

import FiltrationPanelComponent from "components/FiltrationPanel/FiltrationPanel";
import ProductsComponent from "components/Products/Products";
import "./Content.scss";

const ContentComponent = (props) => {
  const {
    filtredProducts,
    lowerPriceLimit,
    upperPriceLimit,
    currentCurrency,
    sortingOption,
    handleCurrencyChange,
    handlePriceLimits,
    handleSortingOption,
  } = props;

  return (
    <div className="content-component">
      <div className="filtred-products">
        <FiltrationPanelComponent
          currentCurrency={currentCurrency}
          lowerPriceLimit={lowerPriceLimit}
          upperPriceLimit={upperPriceLimit}
          sortingOption={sortingOption}
          handleCurrencyChange={(currency) => handleCurrencyChange(currency)}
          handlePriceLimits={(event) => handlePriceLimits(event)}
          handleSortingOption={(event) => handleSortingOption(event)}
        />
        <ProductsComponent
          currentCurrency={currentCurrency}
          filtredProducts={filtredProducts}
        />
      </div>
    </div>
  );
};

export default ContentComponent;
