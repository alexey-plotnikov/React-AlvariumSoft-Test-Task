import React from "react";

import ContentComponent from "components/Content/Content";
import {
  FiltrationPanelConstants,
  FiltrationPanelValues,
} from "common/constants";

import Products from "common/products.json";

class ContentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      products: Products.products,
      sortingOption: FiltrationPanelValues.ALPHABET,
      lowerPriceLimit: "",
      upperPriceLimit: "",
      currentCurrency: FiltrationPanelConstants.UAH,
    };
  }

  handleSortingOption(event) {
    this.setState({
      sortingOption: event.target.value,
    });
  }

  handleCurrencyChange(currency) {

    this.setState({
      currentCurrency: currency,
    });
  }

  render() {
    const { products, currentCurrency, sortingOption } = this.state;

    return (
      <div>
        <ContentComponent
          products={products}
          currentCurrency={currentCurrency}
          sortingOption={sortingOption}
          handleCurrencyChange={(currency) =>
            this.handleCurrencyChange(currency)
          }
          handleSortingOption={(event) => this.handleSortingOption(event)}
        />
      </div>
    );
  }
}

export default ContentContainer;
