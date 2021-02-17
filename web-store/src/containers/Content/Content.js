import React from "react";

import ContentComponent from "components/Content/Content";
import {
  FiltrationPanelConstants,
  FiltrationPanelValues,
} from "common/constants";

import { Products } from "common/mocks";

class ContentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      products: Products,
      filtredProducts: Products,
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
    const {products, filtredProducts} = this.state;

    // let filteredUsers = filtredProducts;

    // if (currency === "USD") {
    //   filteredUsers = filteredUsers.map((product) => product.price = product.price * 0.36)
    // } else {
    //   filteredUsers = products;
    // }

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
