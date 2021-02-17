import React from "react";

import FiltrationPanelComponent from "components/FiltrationPanel/FiltrationPanel";
import ProductsComponent from "components/Products/Products";
import NewProductComponent from "components/NewProduct/NewProduct";
import "./Content.scss";

const ContentComponent = (props) => {
  const {
    products,
    currentCurrency,
    sortingOption,
    handleCurrencyChange,
    handleSortingOption,
  } = props;

  return (
    <div className="content-component">
      <div className="filtred-products">
        <FiltrationPanelComponent
          currentCurrency={currentCurrency}
          sortingOption={sortingOption}
          handleCurrencyChange={(currency) => handleCurrencyChange(currency)}
          handleSortingOption={(event) => handleSortingOption(event)}
        />
        <ProductsComponent
          currentCurrency={currentCurrency}
          products={products}
        />
      </div>
      <div>
        <NewProductComponent />
      </div>
    </div>
  );
};

export default ContentComponent;
